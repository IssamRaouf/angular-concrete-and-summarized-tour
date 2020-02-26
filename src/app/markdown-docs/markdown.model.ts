export class MarkdownModel {

    public noteGeneralFile: string;
    public moduleDir: string;
    // key => name
    // value => file
    public mapExamplesCode: Map<string, string>;


    public constructor(json?: any) {
        if (json !== null && json !== undefined) {
            Object.keys(json).forEach(key => {
                this[key] = json[key];
            });
        }

    }

}
