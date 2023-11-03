/* tslint:disable */
/* eslint-disable */
/**
 * Notes API - aplikacja umożliwiająca dodawanie i zarządzanie notatkami
 * API aplikacji wspomagajace zarządzanie notatkami użytkownika. Jest to aplikacja webowa, która umożliwia dodawanie, usuwanie oraz wyświetlanie wszystkich notatek. Ułatwia zarządzanie własnymi notatkami
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Note } from '../models';
import { NoteInput } from '../models';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new note
         * @param {NoteInput} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNote: async (body: NoteInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createNote.');
            }
            const localVarPath = `/notes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a note by ID
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNote: async (noteId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'noteId' is not null or undefined
            if (noteId === null || noteId === undefined) {
                throw new RequiredError('noteId','Required parameter noteId was null or undefined when calling deleteNote.');
            }
            const localVarPath = `/notes/{noteId}`
                .replace(`{${"noteId"}}`, encodeURIComponent(String(noteId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve a specific note by ID
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNote: async (noteId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'noteId' is not null or undefined
            if (noteId === null || noteId === undefined) {
                throw new RequiredError('noteId','Required parameter noteId was null or undefined when calling getNote.');
            }
            const localVarPath = `/notes/{noteId}`
                .replace(`{${"noteId"}}`, encodeURIComponent(String(noteId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve a list of notes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNotes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/notes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing note
         * @param {NoteInput} body 
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNote: async (body: NoteInput, noteId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateNote.');
            }
            // verify required parameter 'noteId' is not null or undefined
            if (noteId === null || noteId === undefined) {
                throw new RequiredError('noteId','Required parameter noteId was null or undefined when calling updateNote.');
            }
            const localVarPath = `/notes/{noteId}`
                .replace(`{${"noteId"}}`, encodeURIComponent(String(noteId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new note
         * @param {NoteInput} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNote(body: NoteInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Note>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).createNote(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete a note by ID
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNote(noteId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).deleteNote(noteId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Retrieve a specific note by ID
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNote(noteId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Note>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getNote(noteId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Retrieve a list of notes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listNotes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Note>>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).listNotes(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update an existing note
         * @param {NoteInput} body 
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNote(body: NoteInput, noteId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Note>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).updateNote(body, noteId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create a new note
         * @param {NoteInput} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNote(body: NoteInput, options?: AxiosRequestConfig): Promise<AxiosResponse<Note>> {
            return DefaultApiFp(configuration).createNote(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a note by ID
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNote(noteId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DefaultApiFp(configuration).deleteNote(noteId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve a specific note by ID
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNote(noteId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Note>> {
            return DefaultApiFp(configuration).getNote(noteId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve a list of notes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listNotes(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Note>>> {
            return DefaultApiFp(configuration).listNotes(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an existing note
         * @param {NoteInput} body 
         * @param {number} noteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNote(body: NoteInput, noteId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Note>> {
            return DefaultApiFp(configuration).updateNote(body, noteId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Create a new note
     * @param {NoteInput} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async createNote(body: NoteInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<Note>> {
        return DefaultApiFp(this.configuration).createNote(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete a note by ID
     * @param {number} noteId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async deleteNote(noteId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DefaultApiFp(this.configuration).deleteNote(noteId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Retrieve a specific note by ID
     * @param {number} noteId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async getNote(noteId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Note>> {
        return DefaultApiFp(this.configuration).getNote(noteId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Retrieve a list of notes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async listNotes(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Note>>> {
        return DefaultApiFp(this.configuration).listNotes(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update an existing note
     * @param {NoteInput} body 
     * @param {number} noteId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async updateNote(body: NoteInput, noteId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Note>> {
        return DefaultApiFp(this.configuration).updateNote(body, noteId, options).then((request) => request(this.axios, this.basePath));
    }
}
