Import-Module SharePointPnPPowerShellOnline
Connect-PnPOnline –Url "SHAREPOINT-SITECOLL-URL" –Credentials (Get-Credential)
Apply-SPOProvisioningTemplate -Path "PATH TO\webpart-provisionning-template.xml"