/* EDIT YOUR PROJECTS HERE. Add, remove or change items and both project pages update. */
const PAGE = { name: "Raphael De Luis" };

const PROJECTS = [
  {
    id: "proxmox",
    name: "Virtualization Using Proxmox VE",
    summary: "A home lab built on Proxmox VE for running and testing enterprise-style infrastructure.",
    tags: ["Proxmox VE", "Virtualization", "Home Lab", "NAS"],
    sections: [
      { title: "What I built", items: [
        "A Proxmox VE host running virtual machines for lab and testing work.",
        "Storage backed by a NAS, with backups and recovery in mind.",
        "Cloud-integrated enterprise simulations on top of the lab."
      ]},
      { title: "What I learned", items: [
        "Placeholder: add the key takeaways, such as networking between VMs, snapshots and backup strategy."
      ]}
    ]
  },
  {
    id: "containers",
    name: "Basic Containerization",
    summary: "A hands-on introduction to packaging and running applications in containers.",
    tags: ["Containers", "Linux"],
    sections: [
      { title: "What I built", items: [
        "Placeholder: describe the container(s) you built and what they run."
      ]},
      { title: "What I learned", items: [
        "Placeholder: images vs. containers, ports and volumes, how containers differ from VMs."
      ]}
    ]
  },
  {
    id: "aws",
    name: "AWS Projects",
    summary: "Hands-on AWS labs covering identity, compute, scaling, load balancing and storage.",
    tags: ["AWS", "Terraform", "IAM", "EC2", "Auto Scaling", "EBS"],
    sections: [
      { title: "Labs completed", html: true, items: [
        "<strong>Creating an IAM user:</strong> setting up access with least-privilege permissions.",
        "<strong>Creating an instance using Terraform:</strong> provisioning EC2 as infrastructure as code.",
        "<strong>Implementing an Auto Scaling Group:</strong> scaling instances automatically with demand.",
        "<strong>Implementing load balancing for 2 instances:</strong> spreading traffic across instances.",
        "<strong>Migrating EBS to another region:</strong> moving storage between regions."
      ]},
      { title: "What I learned", items: [
        "Placeholder: add the key takeaways, such as cost, regions and repeatable deployments with Terraform."
      ]}
    ]
  }
];
