import { ref, computed, onMounted, onBeforeUnmount } from "vue";

import bg from "@/assets/img/bg_a.png";
import a from "@/assets/img/product/gpon/olt/olt-v8208.png"; // Import your CSS file
import b from "@/assets/img/product/gpon/olt/olt-v5832xg.png";
import c from "@/assets/img/product/gpon/ont/ont-h840c.png"; // Import your CSS file
import d from "@/assets/img/product/gpon/onu/onu-v2724xt.png"; // Import your CSS file
import e from "@/assets/img/product/gpon/olt/olt-V5816.png"; // Import your CSS file
import switch_b from "@/assets/img/product/switch/l3-switch-v-5624g.png";
import switch_c from "@/assets/img/product/switch/switch-d-2224g.png";

// const activeTab = ref('XGS/G-PON')
// const currentIndex = ref(0)
// const cardsPerSlide = ref(3)
function useTabs() {
    const tabs = ref({
        "XGS-PON": {
            cards: [
                {
                    id: 1,
                    slug: "V8208",
                    title: "V8208",
                    body: "The V8208 is a 6RU height chassis PON Optical Line Termination (OLT) supporting XGS-PON, GPON as well as 10GE Active Ethernet service. It is designed for large-scale deployment in FTTH/FTTO networks.",
                    image: a,
                    logo: bg,
                },
                {
                    id: 2,
                    slug: "V5832XG",
                    title: "V5832XG",
                    body: "The V5832XG is a multi-platform system designed to allow the use of a mix of Gigabit Ethernet (SFP, Gigabit Copper) and EPON OLT interfaces, taking network flexibility into consideration.",
                    image: b,
                    logo: bg,
                },
                {
                    id: 3,
                    slug: "H840C",
                    title: "H840C",
                    body: "The H840C optical network terminal (ONT) is targeted for all subscribers requiring multiple POTS and high-speed data interfaces in a cost-effective indoor housing. H840C support a standalone device and with fan-less design.",
                    image: c,
                    logo: bg,
                },
                {
                    id: 4,
                    slug: "V2724XT",
                    title: "V2724XT",
                    body: "The V2724XT is a cost effective single-board 10 Gigabit Ethernet switch. It has been designed as ultra-compact customer premise equipment with the reliable Layer 2 functionalities.",
                    image: d,
                    logo: bg,
                },
            ],
        },
        "G-PON": {
            cards: [
                {
                    id: 1,
                    slug: "V5816",
                    title: "V5816",
                    body: "V5816F can be used as a GPON Optical Line Termination (OLT) supporting 16-Port GPON interfaces as well as L3 switch of supporting 4-Port 10GBase-R (SFP+)and 4-Port 10/100/1000Base-T(RJ45) service. It terminates the traffic coming from the subscriber lines and consolidates it on one or more Gigabit Ethernet interfaces towards the metropolitan area.",
                    image: e,
                    logo: bg,
                },
                {
                    id: 2,
                    slug: "V.5624.G",
                    title: "V.5624.G",
                    body: "24-port, no traffic delay.",
                    image: switch_b,
                    logo: bg,
                },
                {
                    id: 3,
                    slug: "D.2224.G",
                    title: "D.2224.G",
                    body: "Switch for communication.",
                    image: switch_c,
                    logo: bg,
                },
            ],
        },
        SWITCH: {
            cards: [
                {
                    id: 1,
                    slug: "V.5624.G",
                    title: "V.5624.G",
                    body: "24-port, no traffic delay.",
                    image: switch_b,
                    logo: bg,
                },
                {
                    id: 2,
                    slug: "D.2224.G",
                    title: "D.2224.G",
                    body: "Switch for communication.",
                    image: switch_c,
                    logo: bg,
                },
            ],
        },
    });

    return { tabs };
}

export default useTabs; // ✅ ekspor default
