using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TP1.Controllers
{
    public class TreeController : ApiController
    {
        [HttpGet]
        public IHttpActionResult TreeNodes()
        {
            var ssoName = GeneralUtility.GetSso(User.Identity.Name);

            var treeNodes = TreeService.GetTreeNodes(ssoName);

            return Ok(treeNodes);
        }

        [HttpGet]
        public IHttpActionResult AngularTreeNodes()
        {
            var ssoName = GeneralUtility.GetSso(User.Identity.Name);

            var treeNodes = TreeService.GetTreeNodes(ssoName);

            AutoMapper.Mapper.CreateMap<TreeNode, AngularTreeNode>()
                .ForMember(dest => dest.name, opts => opts.MapFrom(src => src.text));

            var angularTreeNodes = AutoMapper.Mapper.Map<List<AngularTreeNode>>(treeNodes);

            return Ok(angularTreeNodes);
        }
    }
}
