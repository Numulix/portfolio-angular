import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProjectItem } from "../../consts/types";

@Injectable({
    providedIn: 'root'
})
export class JsonSiloService {
    private readonly jsonSiloUrl = environment.jsonSiloUrl;

    constructor(private _http: HttpClient) {}

    getProjects(): Observable<ProjectItem[]> {
        return this._http.get<ProjectItem[]>(`${this.jsonSiloUrl}`);
    }
}