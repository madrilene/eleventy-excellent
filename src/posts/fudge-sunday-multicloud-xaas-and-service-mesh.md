---
title: "Fudge Sunday - Multicloud, XaaS, and Service Mesh"
description: 'A look at Multicloud Data Services and everything evolving to be a service with an increasing emphasis on observability'
date: 2021-12-13 01:42:56+00:00
---
This week we take a look at Multicloud Data Services and everything evolving to be a service with an increasing emphasis on observability.

 **Getting Informed**

If you’ve read a few of my newsletter issues, you know I believe strongly in the inevitable nature of [multicloud](https://sunday.fudge.org/issues/fudge-sunday-multicloudwashing-detergent-762371?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [multicloud data services](https://sunday.fudge.org/issues/fudge-sunday-multicloudwashing-detergent-762371?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). As such, I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter) at the end of each newsletter issue.

On the way to our multicloud future, a key element of successful outcomes will be increased [observability](https://sunday.fudge.org/issues/fudge-sunday-cloud-in-public-engineering-slo-794553?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). As such, getting informed about what companies and technologies will promote easier access to [observability](https://sunday.fudge.org/issues/fudge-sunday-cloud-in-public-engineering-slo-794553?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) is worth exploring further across various [service mesh](https://servicemesh.es?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) related projects like [Istio](https://istio.io/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Consul](https://consul.io/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Envoy](https://envoyproxy.io/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Kuma](https://kuma.io/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Helm](https://helm.sh/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Linkerd](https://linkerd.io/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [eBPF](https://ebpf.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Cilium](https://cilium.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), and [SMI](https://smi-spec.io/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

Blog posts can be a great place to take in longer form perspectives on a specific topic like “[service mesh](https://servicemesh.es?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)”. This week we’ll start with one blog post that provides opinionated insights into identifying, managing, and securing the communication of many services.

**[Thomas Graf](https://twitter.com/tgraf__/status/1468624598853988358)**

[@tgraf\_\_](https://twitter.com/tgraf__/status/1468624598853988358)

I've written down my thoughts on how eBPF will help solve service mesh complexity and performance by getting rid of sidecars.  
  
<https://t.co/c8PGTyNru0>

[11:52 AM - 8 Dec 2021](https://twitter.com/tgraf__/status/1468624598853988358)

(https://isovalent.com/blog/post/2021-12-08-ebpf-servicemesh?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)**

If you take time to read this blog post you’ll learn that one alternative to chained sidecar proxy oriented Service Mesh is…. eBPF Service Mesh. In shorter terms, just take the complexity to the kernel.

[isovalent.com](https://isovalent.com/blog/post/2021-12-08-ebpf-servicemesh?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

Again, the blog post is both informative and opinionated. Specifically, this blog post is the perspective of [Isovalent](https://isovalent.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), a company that provides commercially supported implementations of [eBPF](https://ebpf.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [Cilium](https://cilium.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

Does [Isovalent](https://isovalent.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) sound familiar? They should.

**[A year ago...](https://www.techmeme.com/201110/p19?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a201110p19)**

Isovalent raised ~$29M for simplified access to [eBPF](https://ebpf.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [Cilium](https://cilium.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

[www.techmeme.com](https://www.techmeme.com/201110/p19?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a201110p19)

Of course, the Investments in the [service mesh](https://servicemesh.es?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) market space have been more that just [Isovalent](https://isovalent.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and go back more than just one year. So, let’s take a look over the past few years at a few companies such as [Tetrate](https://tetrate.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [VMware](https://tanzu.vmware.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [HashiCorp](https://www.hashicorp.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Tigera](https://www.tigera.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Buoyant](https://buoyant.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Weaveworks](https://www.weave.works?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Solo](https://www.solo.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Microsoft](https://openservicemesh.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), and [Kentik](https://www.kentik.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). 

**[2014](https://www.hashicorp.com/blog/consul-announcement?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)**

[HashiCorp](https://www.hashicorp.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) announced Consul as a solution for service discovery and configuration.

[www.hashicorp.com](https://www.hashicorp.com/blog/consul-announcement?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

**[2017](https://www.techmeme.com/170711/p23?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a170711p23)**

[Buoyant](https://buoyant.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) raised $10.5M (total of $24M) for microservices management.

[www.techmeme.com](https://www.techmeme.com/170711/p23?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a170711p23)

**[2018](https://www.techmeme.com/181212/p28?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a181212p28)**

[Tigera](https://www.tigera.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) raised $30M (total of $53M) for security and compliance of Kubernetes containers.

[www.techmeme.com](https://www.techmeme.com/181212/p28?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a181212p28)

**[2018](https://blogs.vmware.com/networkvirtualization/2018/12/nsx-service-mesh.html/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)**

[VMware](https://tanzu.vmware.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) announced NSX® Service Mesh announced based upon [Istio](https://istio.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) that was extended for visibility, control, and security.

[blogs.vmware.com](https://blogs.vmware.com/networkvirtualization/2018/12/nsx-service-mesh.html/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

**[2019](https://www.techmeme.com/190313/p10?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a190313p10)**

[Tetrate](https://tetrate.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) raised $12.5M for app management platform of hybrid and multicloud environments.

[www.techmeme.com](https://www.techmeme.com/190313/p10?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a190313p10)

**[2019](https://www.techmeme.com/190521/p18?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a190521p18)**

[Microsoft](http://Microsoft?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) announced Service Mesh Interface for Kubernetes for managing application environments and networks with Docker, Pivotal, and VMware.

[www.techmeme.com](https://www.techmeme.com/190521/p18?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a190521p18)

**[2020](https://www.techmeme.com/200527/p18?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a200527p18)**

[Kentik](https://www.kentik.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) raised $23.5M (total of $61.7M) for enterprise network intelligence services.

[www.techmeme.com](https://www.techmeme.com/200527/p18?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a200527p18)

**[2020](https://www.techmeme.com/201209/p51?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a201209p51)**

[Weaveworks](https://www.weave.works?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) raised $36.6M (total of $60M) for Kubernetes cloud management. 

[www.techmeme.com](https://www.techmeme.com/201209/p51?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a201209p51)

**[2020](https://www.techmeme.com/200805/p40?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a200805p40)**

[Microsoft](http://Microsoft?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) announces Open Service Mesh for building complex modular apps more easily.

[www.techmeme.com](https://www.techmeme.com/200805/p40?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a200805p40)

**[2021](https://www.techmeme.com/210310/p49?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a210310p49)**

[Tetrate](https://tetrate.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) raised $40M (total of $52.5M) for app management platform of hybrid and multicloud environments.

[www.techmeme.com](https://www.techmeme.com/210310/p49?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a210310p49)

**[2021](https://www.techmeme.com/211007/p15?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a211007p15)**

[Solo](https://www.solo.io?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) raised $135M (total of $171M) for APIs that connect networking software, data, and hardware.

[www.techmeme.com](https://www.techmeme.com/211007/p15?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a211007p15)

**[2021](https://www.techmeme.com/211209/p36?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a211209p36)**

[HashiCorp](https://www.hashicorp.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) closed up 6.49% in its Nasdaq debut, after raising $1.2B in its IPO at a $14B valuation.

[www.techmeme.com](https://www.techmeme.com/211209/p36?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#a211209p36)

When I read the tweet that inspired this newsletter issue my response was:

*Good stuff. I look forward to opinionated blog posts from each of these other companies (companies that just happen to support similar and differing projects with common [service mesh](https://servicemesh.es?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) goals)*

sources:

1. [techmeme.com](https://techmeme.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)
2. [crunchbase.com](https://crunchbase.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

 **Disclosure**

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).









