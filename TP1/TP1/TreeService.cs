using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace TP1
{
    public class TreeService
    {
        public static List<TreeNode> GetTreeNodes(string ssoName)
        {
            List<TreeNode> treeNodes;

            var handler = new HttpClientHandler { UseDefaultCredentials = true };
            ServicePointManager.ServerCertificateValidationCallback += (sender, certificate, chain, sslPolicyErrors) => true;

            using (var client = new HttpClient(handler, true))
            {
                var humanCapitalServicesBaseUrl = Config.HumanCapitalServicesBaseUrl;
                var humanCapitalServicesTreeApiUrl = Config.HumanCapitalServicesTreeApiUrl;
                var humanCapitalServicesTreeApiUrlWithSso = string.Format(humanCapitalServicesTreeApiUrl, ssoName);

                client.BaseAddress = new Uri(humanCapitalServicesBaseUrl);

                var response = client.GetAsync(humanCapitalServicesTreeApiUrlWithSso).Result;

                if (response.IsSuccessStatusCode)
                {
                    var data = response.Content.ReadAsStringAsync().Result;
                    treeNodes = JsonConvert.DeserializeObject<List<TreeNode>>(data);
                }
                else
                {
                    throw new ApplicationException("Unable to get Tree Nodes from Web API");
                }
            }

            return treeNodes;
        }
    }

    public static class Config
    {
        public static string HumanCapitalServicesBaseUrl
        {
            get
            {
                return ConfigurationManager.AppSettings["HumanCapitalServicesBaseUrl"];
            }
        }

        public static string HumanCapitalServicesTreeApiUrl
        {
            get
            {
                return ConfigurationManager.AppSettings["HumanCapitalServicesTreeApiUrl"];
            }
        }
    }
}