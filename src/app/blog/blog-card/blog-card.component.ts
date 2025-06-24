import { Component, Input } from "@angular/core";
import { ButtonComponent } from "../../buttons/primary-button/button.component";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-blog-card",
    templateUrl: "./blog-card.component.html",
    standalone: true,
    imports: [ButtonComponent, RouterModule]
})
export class BlogCardComponent {
    @Input() slug: string = "";
    @Input() title: string = "";
    @Input() summary: string = "";
    @Input() publishedAt: string = "";

    constructor() { }
}