// tslint:disable-next-line:no-empty-interface
export interface IComponent {

}

export interface IQuestion {
    required: boolean;
    title: string;
    answerType: string;
    options: [];
}
