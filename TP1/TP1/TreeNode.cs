using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TP1
{
    public class TreeNode
    {
        private List<TreeNode> _children = new List<TreeNode>();
        public int id { get; set; }
        public string text { get; set; }
        public string description { get; set; }
        public int parentId { get; set; }

        public List<TreeNode> children
        {
            get { return _children; }
        }
    }

    public class AngularTreeNode
    {
        private List<AngularTreeNode> _children = new List<AngularTreeNode>();
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int parentId { get; set; }

        public List<AngularTreeNode> children
        {
            get { return _children; }
        }
    }
}