# TypeScript-React-PnP-ContentWebpart
Create a content webpart, connect to SharePoint with PnP, inject your HTML in the webpart with React

To use this :
1. Add your tenant Url/account/password in the SPSave part of the webpack.config.js
2. Use PnP Provsionning Engine to add a custom action which will load your bundle, in the folder ’’’provisionning’’’
3. Run ’’’npm start’’’ SPSave will deploy your js bundle in SharePoint
