
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FireService, USER, USER_NOT_FOUND } from './../../../../modules/firelibrary/core';
import { AppService } from '../../../../providers/app.service';
import { USER_LOGIN, BOOK } from '../../../../modules/xapi/interfaces';
import { stat } from 'fs';


@Component({
    selector: 'admin-header-component',
    templateUrl: 'admin-header.component.html',
    styleUrls: ['admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {

    pointToday = 0;
    payments = [];
    stats = null;

    sessions: Array<BOOK> = [];
    refundRequests: Array<BOOK> = [];


    /**
     * quick search
     */
    uid = '';
    constructor(
        public router: Router,
        // public fire: FireService,
        public a: AppService
    ) {

        this.loadPaymentInfo();
        setInterval(() => this.loadPaymentInfo(), 30 * 60 * 1000); // 30 mins
        this.loadStatInfo();
        setInterval(() => this.loadStatInfo(), 60 * 60 * 1000); // 1 hour


        this.loadSessionOnGoing();
        setInterval(() => this.loadSessionOnGoing(), 60 * 1000); /// every minutes.

        this.loadRefundRequest();
    }

    ngOnInit() {
    }

    loadPaymentInfo() {
        const sql = `
        SELECT p.idx, p.amount, p.currency, p.idx_student, p.payment_method, p.point, p.stamp_begin, p.state
        FROM lms_payment as p, wp_users
        WHERE BRANCH AND wp_users.ID = p.idx_student AND p.state = 'approved'
        ORDER BY p.idx DESC
        LIMIT 5
        `;
        this.a.lms.admin_query({
            sql: sql,
            student_info: true
        }).subscribe(re => {
            // console.log('payment: ', re);
            this.payments = re;
        }, e => this.a.toast(e));

        const stampToday = this.a.getStampOfToday();
        const sqlToday = `
        SELECT sum(p.point) as point
        FROM lms_payment as p, wp_users
        WHERE BRANCH and wp_users.ID=p.idx_student AND p.state='approved' AND stamp_begin>=${stampToday}
        `;
        this.a.lms.admin_query({ sql: sqlToday }).subscribe(re => {
            // console.log('sum: ', re);
            this.pointToday = re[0]['point'];
        }, e => this.a.toast(e));
    }

    loadStatInfo() {
        this.a.xapi.post({
            route: 'lms.admin_stat',
            session_id: this.a.user.sessionId
        }).subscribe(re => {
            // console.log('stat: ', re);
            this.stats = re;
            if (this.stats.stat.teachers) {
                const teachers = this.stats.stat.teachers;
                const names = Object.keys(teachers);
                if (names.length) {
                    const data = [];
                    for (const name of names) {
                        data.push({
                            name: name,
                            idx: teachers[name].idx,
                            reserved: teachers[name].reserved,
                            past: teachers[name].past
                        });
                    }
                    data.sort((a, b) => {
                        return b.reserved - a.reserved;
                    });
                    // console.log('teachers: ', data);
                    this.stats.teachers = data;
                }
            }
        }, e => this.a.toast(e));
    }


    loadSessionOnGoing() {

        let sql = `SELECT r.* FROM lms_reservation as r, wp_users WHERE BRANCH AND wp_users.ID = r.idx_student`;
        const u = this.a.getUTCYmdHisFromUserYmdHi(this.a.getYmdHi());
        const date = u.substr(0, 8);
        const Hi = u.substr(8, 4);

        sql += ` AND (r.date > '${date}' OR (r.date>='${date}' AND class_begin>='${Hi}'))`;
        sql += ` ORDER BY r.date ASC, r.class_begin ASC`;
        sql += ` LIMIT 100`;
        // console.log('sql: ', sql);
        this.a.lms.admin_query({
            sql: sql,
            student_info: true,
            teacher_info: true
        }).subscribe(re => {
            // console.log('going re: ', re);
            this.sessions = re;
            // this.re = re;
            // this.statistics();
            // this.sanitize();
            // console.log(re);
            if (this.sessions.length) {
                for (const session of this.sessions) {
                    this.a.convertSessionIntoUserTime(session);
                    // const b = this.a.getUserYmdHiFromUTCYmdHi(session.date + session.class_begin);
                    // session.date = b.substr(0, 8);
                    // session.class_begin = b.substr(8, 4);
                }
            }
        }, e => this.a.toast(e));
        return false;
    }
    onSubmitUserQuickSearch(event: Event) {
        event.preventDefault();
        this.router.navigateByUrl('/admin/user/uid/' + this.uid);
        return false;
    }
    loadRefundRequest() {
        let sql = `SELECT r.* FROM lms_reservation as r, wp_users WHERE BRANCH AND wp_users.ID = r.idx_student`;

        sql += ` AND ( (r.refund_request_at > 0) OR (r.refund_reject_at > 0) )
                    AND refund_done_at = 0
                    AND refund_settle_at = 0
                    AND paid=0 `;
        sql += ` ORDER BY r.date DESC, r.class_begin DESC`;
        sql += ` LIMIT 5`;
        // console.log('sql: ', sql);
        this.a.lms.admin_query({
            sql: sql,
            student_info: true,
            teacher_info: true
        }).subscribe(re => {
            // console.log('refund request: ', re);
            this.refundRequests = re;
            if (this.refundRequests && this.refundRequests.length) {
                for (const s of this.refundRequests) {
                    this.a.convertSessionIntoUserTime(s);
                    s.date = s.date.substr(4);
                }
            }
        }, e => this.a.toast(e));
    }
}

