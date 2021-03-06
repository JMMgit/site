import { Component } from '@angular/core';
import { AppService } from '../../providers/app.service';


@Component({
    selector: 'message-page',
    templateUrl: 'message.page.html',
    styleUrls: ['message.page.scss'],
})
export class MessagePage {

    data = null;
    page_no = 1;
    message_count;
    limit = 10;
    box = 'inbox';

    loading = false;

    constructor(
        public a: AppService
    ) {
        this.loadMessage({box: this.box, page_no: this.page_no, limit: this.limit});
    }


    onClickBox(box) {
        this.box = box;
        this.loadMessage({box: this.box, page_no: 1, limit: this.limit});
    }


    loadMessage(o) {
        this.loading = true;
        this.a.lms.message(o).subscribe(re => {
            this.loading = false;
            // console.log(re);
            this.data = re;
            this.message_count = this.data.messages.length;
        }, e => this.a.toast(e));
    }

    onClickPrevious() {
        this.page_no--;
        this.loadMessage({box: this.box, page_no: this.page_no, limit: this.limit});
    }

    onClickNext() {
        this.page_no++;
        this.loadMessage({box: this.box, page_no: this.page_no, limit: this.limit});
    }


    onClickMessage(message) {
        // console.log(message);
        message['view'] = !message['view'];
        if (message.open === '0') {
            // console.log("not open");
            this.a.lms.message_opened(message.idx).subscribe(res => {
                // console.log(res);
                message.open = 1;
            }, e => {
                this.a.toast(e);
            });
        }
    }
}
