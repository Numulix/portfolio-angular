import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, RouterModule } from "@angular/router";
import fm from "front-matter";
import { MarkdownComponent } from "ngx-markdown";

@Component({
    selector: "app-blog-post",
    templateUrl: "./blog-post.component.html",
    standalone: true,
    imports: [RouterModule, MarkdownComponent],
    encapsulation: ViewEncapsulation.ShadowDom,
    styleUrls: [
        "./blog-post.component.css",
        "/node_modules/prismjs/themes/prism-okaidia.css"
    ],
})
export class BlogPostComponent implements OnInit {
    postContent: string | null = null;
    postAttributes: { [key: string]: string } = {};

    constructor(
        private _route: ActivatedRoute,
        private _http: HttpClient,
        private _titleService: Title,
        private _metaService: Meta
    ) { }
    
    ngOnInit(): void {
        const slug = this._route.snapshot.paramMap.get("slug");

        this._http.get(`/blog/${slug}.md`, { responseType: "text" })
            .subscribe(data => {
                const parsedContent: any = fm(data);
                this.postAttributes = parsedContent.attributes;
                this.postContent = parsedContent.body;

                this._titleService.setTitle(`Blog | ${this.postAttributes['title']}`)
                this._metaService.updateTag({
                    name: 'summary',
                    content: this.postAttributes['summary']
                })
            })
    }
}