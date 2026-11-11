/* ----------------------------------------------------------------------------
   ALL YOUR PROJECTS LIVE HERE.  To add one:
     1. Copy projects/_template.html to projects/<id>.html and fill it in.
     2. Add an entry below (newest first). That's it - the Projects page and the
        main-page "Projects" section both update by themselves.

   Fields:  id        file name without .html (lowercase-with-dashes)
            name      project title
            summary   one or two sentences shown on the cards
            tags      short keywords shown as tags on the card
            date      optional, shown on the card, e.g. "2025"
            featured  true = also shown on the main page (keep to ~3-6)
---------------------------------------------------------------------------- */
const PAGE = { name: "Raphael De Luis" };

const PROJECTS = [
  {
    id: "omada-sdn",
    name: "SOHO Network with TP-Link Omada SDN",
    summary: "A cloud-managed SOHO network on a router on a stick: an ER605 gateway, managed switch, six outdoor access points and VLAN segmentation, all run from an OC200 controller.",
    tags: ["TP-Link Omada", "SDN", "VLAN", "Router on a Stick", "Wi-Fi"],
    featured: true
  },
  {
    id: "proxmox",
    name: "Virtualization Using Proxmox VE",
    summary: "A home lab built on Proxmox VE for running and testing enterprise-style infrastructure.",
    tags: ["Proxmox VE", "Virtualization", "Home Lab", "NAS"],
    featured: true
  },
  {
    id: "containers",
    name: "Basic Containerization",
    summary: "A hands-on introduction to packaging and running applications in containers.",
    tags: ["Containers", "Linux"],
    featured: true
  }
];
