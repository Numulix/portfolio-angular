import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class R2AssetsService {
    private readonly r2Url = environment.r2Url;

    constructor(private _http: HttpClient) {}

    /**
     * Get the URL of an asset from R2
     * @param filePath The path to the asset in R2
     * @returns The URL of the asset
     */
    getAssetUrl(filePath: string) {
        return `${this.r2Url}${filePath}`;
    }
}