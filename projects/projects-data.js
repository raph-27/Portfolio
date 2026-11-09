/* Project list for projects/index.html. Each project's full write-up lives in its own file
   (projects/<id>.html). To add a project: copy an existing page, rename it to <id>.html, and add an entry here. */
const PAGE = { name: "Raphael De Luis" };

const PROJECTS = [
  {
    id: "proxmox",
    name: "Virtualization Using Proxmox VE",
    summary: "A home lab built on Proxmox VE for running and testing enterprise-style infrastructure.",
    tags: ["Proxmox VE", "Virtualization", "Home Lab", "NAS"]
  },
  {
    id: "containers",
    name: "Basic Containerization",
    summary: "A hands-on introduction to packaging and running applications in containers.",
    tags: ["Containers", "Linux"]
  },
  {
    id: "aws",
    name: "AWS Projects",
    summary: "Hands-on AWS labs covering identity, compute, scaling, load balancing and storage.",
    tags: ["AWS", "Terraform", "IAM", "EC2", "Auto Scaling", "EBS"]
  }
];
