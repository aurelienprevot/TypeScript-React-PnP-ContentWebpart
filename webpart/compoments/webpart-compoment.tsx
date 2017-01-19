import * as React from "react";
import pnp from "sp-pnp-js";
import { Web } from "sp-pnp-js";
import * as JQuery from "jquery";
import * as serializer from "form-serializer";
import "../jquery.serialize-object.min.js";

export interface IProps { item: any; listTitle: string }
export interface IState { title: string, message: string }

export class ItemForm extends React.Component<IProps, IState> {

    constructor(props: any) {
        super();
        this.state = {
            title: props.item["Title"],
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    async handleSubmit(event: any): Promise<void> {

        event.preventDefault();
        var datas = $(event.target).serializeObject() as any;

        let spweb = new Web(_spPageContextInfo.webAbsoluteUrl);
        pnp.setup({ headers: { "Accept": "application/json;odata=verbose" } });
        await spweb.lists.getByTitle(this.props.listTitle).items.getById(this.props.item["ID"]).update(datas);

        this.setState({ title: this.state.title, message: "Votre saisie a bien été enregistrée" });
    }

    handleKeyUp(event: any) {
        this.setState({ title: event.target.value, message: this.state.message });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>{this.state.title}</legend>
                        <input type="text" name="Title" defaultValue={this.state.title} onKeyUp={this.handleKeyUp} />
                        <input type="submit" value="Enregistrer" className="bt_form" />
                        <div>{this.state.message}</div>
                    </fieldset>
                </form>

            </div>
        );
    }
}