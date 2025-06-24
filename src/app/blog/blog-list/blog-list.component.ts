import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PostMetadata } from "../../../consts/types";
import { HttpClient } from "@angular/common/http";
import { AsyncPipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BlogCardComponent } from "../blog-card/blog-card.component";

@Component({
    selector: "app-blog-list",
    templateUrl: "./blog-list.component.html",
    imports: [AsyncPipe, RouterModule, BlogCardComponent],
    standalone: true,
})
export class BlogListComponent implements OnInit {
    posts$!: Observable<PostMetadata[]>;

    constructor(private _http: HttpClient) {}

    ngOnInit(): void {
        this.posts$ = this._http.get<PostMetadata[]>("/blog/index.json");
    }
}