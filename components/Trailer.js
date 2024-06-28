import trailer from "../css/trailer.module.css"
import section from "../css/section.module.css"
import Image from "next/image";
import shieldLineup from "../public/shield-lineup.jpg"

export default function Trailer(){
    return(
        <div className={trailer.cardContainer}>

            <div className={trailer.banner}>
                <Image
                    className={trailer.image}
                    src={shieldLineup}
                    fill
                />

                <div className={trailer.textOverlay}>
                    <div className={trailer.mainText}>Endless tension.</div>
                    <div className={trailer.mainText}>Endless action.</div>
                    <div className={trailer.subText}>
                        Discover an elite, tactical shooter where
                        superior planning and flawless execution
                        reigns supreme
                    </div>
                </div>
            </div>

            <iframe
                src="https://www.youtube.com/embed/RPY3TQSolm4?si=AfNnePVL95ZvncDB"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    );
}