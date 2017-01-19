import * as JQuery from "jquery";
import { wpUtils } from "./wpUtils";
import pnp from "sp-pnp-js";
import { Web } from "sp-pnp-js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ItemForm } from "./compoments/webpart-compoment";

class wpRender {

    public static async main(wpDOMElementID: string): Promise<void> {

        if (_spPageContextInfo) {

            var listTitle = "Test";
            var fieldIName = "Title";
            var value = "Lot 3";

            let spweb = new Web(_spPageContextInfo.siteAbsoluteUrl);
            pnp.setup({ headers: { "Accept": "application/json;odata=verbose" } });
            var items = await spweb.lists.getByTitle(listTitle).items.select(fieldIName, "Id").filter(fieldIName + " eq '" + value + "'").get();
            console.log(items);
            ReactDOM.render(<ItemForm item={items[0]} listTitle={listTitle} />, document.getElementById(wpDOMElementID));

        }
        else {
            await wpUtils.delay(500);
            wpRender.main(wpDOMElementID);
        }
    }

}
jQuery(document).ready(function () {
    wpRender.main("ma-webpart");
});