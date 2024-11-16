import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/component/layout";

const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

const ZigzagTimeline = () => {
  const items = [
    {
      title: "01",
      cardTitle: "Ihram",
      cardSubtitle: "Before entering the sacred state, pilgrims don the Ihram clothing, which consists of two white, unstitched garments for men and a simple dress for women. This attire symbolizes purity, equality, and the unity of all Muslims. Pilgrims recite the Talbiyah, expressing their readiness to respond to Allah’s call. This phase marks the start of their spiritual journey.",
      media: {
        name: "Step 1 Image",
        source: {
          url: "/assets/images/guide/ihram.jpg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "02",
      cardTitle: "Tawaf",
      cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
      media: {
        name: "Step 2 Image",
        source: {
          url: "/assets/images/guide/tawaf.png",
        },
        type: "IMAGE",
      },
    },
    {
        title: "03",
        cardTitle: "Sa’i: Walking Between Safa and Marwah",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/safa-marwah.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "04",
        cardTitle: "Mina (the Day of Tarwiya)",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/minaa.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "05",
        cardTitle: "Arafah (Day of the Greater Hajj)",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/arafah.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "06",
        cardTitle: "Muzdalifah",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/mustalifah.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "07",
        cardTitle: "Pelt Jamrat Al-Aqabah",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/jamarat.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "08",
        cardTitle: "Adhahi ",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/tawaf.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "09",
        cardTitle: "Shave Hair or Trim",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/hair.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "10",
        cardTitle: "Tawaf Al-Ifada",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/tawaf.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "11",
        cardTitle: "Pelting the three Jamarat",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/tawaf.png",
          },
          type: "IMAGE",
        },
      },
      {
        title: "12",
        cardTitle: "Tawaf Al-Wadaa",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/tawaf.png",
          },
          type: "IMAGE",
        },
      },
  ];

  return (
    <>
    <Layout>
      <div className="row mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: "#0f4c81",
        secondary: "#f5f5f5",
        cardBgColor: "#ffffff",
        cardForeColor: "#0f4c81",
      }}
      cardHeight={200}
      cardWidth={300}
    />
    </div>
    </div>
    </Layout>
<style jsx>
    {`
    .jSOuST {
    color: #000;
    font-size: 19px !important;
    font-weight: 600;
    margin: 0;
    text-align: left;
    width: 97%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    }
     .diSIwa.active {
    background: #f5f5f5;
    color: #E9C751 !important;
	border-radius: 10px;
    border: 1px solid !important;
    font-size: 4rem !important;
	padding: 5px !important;
}
.diSIwa {
    background: #f5f5f5;
    color: #E9C751 !important;
	border-radius: 10px;
    border: 1px solid !important;
    font-size: 4rem !important;
	padding: 5px !important;

}
  .jSOuST {
    color: #000000a8;
    font-size: 12px !important;
    font-weight: 400 !important;
	line-height: 30px ;
    margin: 0;
    text-align: left;
    width: 97%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    }
	.hDXPPT {
		align-items: flex-start;
		background: #ffffff;
		border-radius: 8px;
		display: flex;
		position: absolute;
		filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
		flex-direction: column;
		justify-content: flex-start;
		line-height: 1.5em;
		max-width: 100% !important;
		min-height: 200px;
		position: relative;
		text-align: left;
		width: 98%;
		z-index: 0;
	}
	.hxLLRt {
		display: none !important;
	}
	@media only screen and (max-width: 768px){
		.jSOuST {
			color: #000;
			font-size: 14px !important;
			font-weight: 400 !important;
			line-height: 25px !important;
			margin: 0;
			text-align: left;
			width: 97%;
			padding: 0.5rem 0 0.5rem 0.5rem;
			}   

	}

	.bLHzlm {
		color: #006C35 !important;
		font-size: 2rem !important;
		
	}
	.bZVtmZ:not(.using-icon).active {
		background: #006C35 !important;
		border: 3px solid #006C35 !important;
	}
	.bZVtmZ:not(.using-icon) {
		background: #006C35 !important;
	}
	.bZVtmz {
     width: 4rem !important;
	 height: 4rem !important;
	}
	.hJHChW::before {
		background: #006C35 !important;
		width: 3px;
		height: 2rem;
		position: absolute;
		content: '';
		display: block;
		left: 50%;
		top: -1rem;
		transform: translateY(-50%) translateX(-50%);
	}
	.hJHChW::after {
		background: #006C35 !important;
		content: '';
		display: block;
		height: 100%;
		left: 50%;
		position: absolute;
		width: 3px;
		z-index: 0;
		transform: translateX(-50%);
	}
	.hFrYSD {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		top: calc(0%) !important;
		background: #EACA5A !important;
		transform: translateY(-50%) rotate(225deg);
		z-index: -1;
		right: -13px;
	}

	.hDXPPT {
		align-items: flex-start;
		/* background: #EACA5A; */
		border-radius: 8px  !important;
		display: flex;
		position: absolute;
		filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
		flex-direction: column;
		justify-content: flex-start;
		line-height: 1.5em;
		max-width: 300px;
		border: 1px solid #EACA5A !important;
		min-height: 200px;
		position: relative;
		text-align: left;
		width: 98%;
		z-index: 0;
	}
    `}
</style>
</>
  );
};

export default ZigzagTimeline;
