using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TP1
{
    public static class GeneralUtility
    {
        public static string GetSso(string userName)
        {
            var ssoName = userName.Substring(userName.IndexOf("\\") + 1);

            return ssoName;
        }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1055:UriReturnValuesShouldNotBeStrings", Justification = "This is just returning string to be consumed by angular controller")]
        public static string GetTreeApiUrl(string userName)
        {
            var humanCapitalServicesBaseUrl = Config.HumanCapitalServicesBaseUrl;
            var treeApiUrl = Config.HumanCapitalServicesTreeApiUrl;
            var ssoName = GetSso(userName);

            return humanCapitalServicesBaseUrl + string.Format(treeApiUrl, ssoName);
        }
    }
}