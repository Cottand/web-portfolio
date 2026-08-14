import multiArchNix from "../../assets/markdown/blog/MultiArchNixDockerImages.md";
import nixShellHash from "../../assets/markdown/blog/NixShellFlakeScriptingForHashLanguages.md";
import gradleRepro from "../../assets/markdown/blog/ReproducibleCacheableGradleDocker.md";
import nomadDnsAdblock from "../../assets/markdown/blog/DNSServiceDiscoveryAdblockingNomad.md";
import nomadNixos from "../../assets/markdown/blog/NomdAndNixOS.md";
import dockerNotRepro from "../../assets/markdown/blog/MultiStageDockerNotRepro.md";
import monorepoCiReproducibleBuilds from "../../assets/markdown/blog/ReproducibleInCi.md";
import cockroachDS from "../../assets/markdown/blog/CockroachDBDisasterRecovery.md"
import micromodules from "../../assets/markdown/blog/FromMicroservicesToMonolith.md"
import ociLbs from "../../assets/markdown/blog/ociPubLoadBalancer.md"
import vpnless from "../../assets/markdown/blog/VPNlessHomelab.md"

export const blogFromRef =
    (ref: string | undefined) => ref ? (markdownBlogEntries as Record<string, MarkdownEntryProps>)[ref] : undefined

export type MarkdownEntryProps = { title: string, date: string, href: string, file: string }

const markdownBlogEntries = {
    vpnLessHomelab: {
        title: "Ditching the VPN for securely accessing my homelab",
        date: "28/07/2026",
        href: "vpnLessHomelab",
        file: vpnless,
    },
    ociPublicLoadBalancer: {
        title: "Internet-to-internet load-balancing in OCI",
        date: "06/10/2024",
        href: "ociPublicLoadBalancer",
        file: ociLbs,
    },
    FromMicroservicesToMonolith: {
        title: "From microservices to a monolith",
        href: "FromMicroservicesToMonolith",
        date: "03/10/2024",
        file: micromodules,
    },
    MonorepoCiReproducibleBuilds: {
        title: "Dumb logic for smart monorepo CI thanks to reproducible builds",
        href: "MonorepoCiReproducibleBuilds",
        date: "25/08/2024",
        file: monorepoCiReproducibleBuilds,
    },
    CockroachDBDisasterRecovery: {
        title: "CockroachDB quorum loss disaster recovery recovery",
        href: "CockroachDBDisasterRecovery",
        date: "16/06/2024",
        file: cockroachDS,
    },
    DockerNotReproducible: {
        title: "Multi-stage Docker builds are not (usually) reproducible",
        href: "DockerNotReproducible",
        date: "10/02/2024",
        file: dockerNotRepro,
    },
    MultiArchNixDockerImages: {
        title: "Multi-arch Docker Images With Nix on GitHub Actions",
        href: "MultiArchNixDockerImages",
        date: "20/01/2024",
        file: multiArchNix,
    },
    NixShellFlakeScriptingForHashLanguages: {
        title: "Scripting compiled languages via the Nix shell",
        href: "NixShellFlakeScriptingForHashLanguages",
        date: "23/11/2023",
        file: nixShellHash,
    },
    ReproducibleCacheableGradleDocker: {
        title: "Reproducible and Cacheable builds with Gradle and Docker",
        href: "ReproducibleCacheableGradleDocker",
        date: "25/08/2023",
        file: gradleRepro,
    },
    DNSServiceDiscoveryAdblockingNomad: {
        title: "Running both ad-blocking and poor man's DNS service-discovery for self-hosted Nomad",
        href: "DNSServiceDiscoveryAdblockingNomad",
        date: "10/08/2023",
        file: nomadDnsAdblock,
    },
    nomadNixos: {
        title: "Using NixOS to swiftly and reproducibly get Nomad clients up and running",
        href: "nomadNixos",
        date: "22/05/2023",
        file: nomadNixos,
    }
}
export default markdownBlogEntries
