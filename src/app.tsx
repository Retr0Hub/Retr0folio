import React from "react";
import type { FunctionComponent } from "react";

import styles from './Character.module.css';


const Charater:FunctionComponent = () => {
  	return (
    		<div className={styles.charater}>
      			<div className={styles.header}>
        				<div className={styles.logo} />
        				<div className={styles.button}>
          					<b className={styles.home}>HOME</b>
          					<b className={styles.character}>CHARACTER</b>
          					<b className={styles.character}>Build</b>
        				</div>
        				<div className={styles.buttonLogin}>
          					<b className={styles.character}>Login</b>
        				</div>
      			</div>
      			<div className={styles.lumi}>Lumi</div>
      			<div className={styles.text}>
        				<img className={styles.bgIcon} alt="" src="BG.svg" />
        				<div className={styles.story}>
          					<div className={styles.text1}>
            						<div className={styles.lumiChinese}>Lumi (Chinese: 灯灯 Dēngdēng) is a playable Electro Congenital Resonator in Wuthering Waves. She is a navigator at Lollo Logistics and serves as the captain of a transport team.</div>
          					</div>
          					<div className={styles.text2}>
            						<div className={styles.lumiChinese}>
              							<p className={styles.fromDenseForests}>From dense forests to vast desolate lands, every place that Lollo Logistics' navigator Lumi has traveled bears witness to her radiant charm, like a ray of sunshine.</p>
                								<p className={styles.fromDenseForests}>Born with a disciplined nature, she now embraces her daily work as a diligent courier, taking pride in fulfilling her mission of timely deliveries.</p>
                								</div>
                								</div>
                								</div>
                								</div>
                								<div className={styles.skill}>
                  									<div className={styles.skillChild} />
                  									<div className={styles.skillChild} />
                  									<div className={styles.skillChild} />
                  									<div className={styles.skillChild} />
                								</div>
                								<div className={styles.charater2}>
                  									<img className={styles.subtractIcon} alt="" src="./src/assets/Subtract1.png" />
                  									<img className={styles.charaterSubtractIcon} alt="" src="./src/assets/Subtract2.png" />
                  									<img className={styles.iconClass} alt="" src="./src/assets/Icon Class.png" />
                  									<img className={styles.iconWeapon} alt="" src="./src/assets/Weapon Icon.png" />
                  									<div className={styles.rank}>
                    										<img className={styles.rankChild} alt="" src="./src/assets/Star.png" />
                    										<img className={styles.rankChild} alt="" src="./src/assets/Star.png" />
                    										<img className={styles.rankChild} alt="" src="./src/assets/Star.png" />
                    										<img className={styles.rankChild} alt="" src="./src/assets/Star.png" />
                  									</div>
                  									<div className={styles.charaterLogo} />
                								</div>
                								<div className={styles.info}>
                  									<img className={styles.bg1Icon} alt="" src="BG 1.svg" />
                  									<img className={styles.charaterBgIcon} alt="" src="BG.svg" />
                  									<b className={styles.resonatorInformation}>Resonator Information</b>
                  									<div className={styles.charaterText}>
                    										<div className={styles.character}>
                      											<b>{`Element: `}</b>
                      											<span className={styles.electro}>Electro</span>
                    										</div>
                    										<div className={styles.character}>
                      											<b>{`Weapon: `}</b>
                      											<span className={styles.electro}>Broadblade</span>
                    										</div>
                    										<div className={styles.character}>
                      											<b>{`How to get: `}</b>
                      											<span className={styles.electro}>any Convene Banner</span>
                    										</div>
                    										<div className={styles.character}>
                      											<b>{`Voice Actor (EN): `}</b>
                      											<span className={styles.electro}>Emily Cass</span>
                    										</div>
                  									</div>
                  									<div className={styles.charaterRank}>
                    										<img className={styles.charaterRankChild} alt="" src="Star 1.svg" />
                    										<img className={styles.charaterRankChild} alt="" src="Star 2.svg" />
                    										<img className={styles.charaterRankChild} alt="" src="Star 3.svg" />
                    										<img className={styles.charaterRankChild} alt="" src="Star 4.svg" />
                  									</div>
                  									<img className={styles.galleryIcon} alt="" src="gallery.svg" />
                								</div>
                								<div className={styles.lumiStats}>
                  									<div className={styles.level}>
                    										<b className={styles.character}>HP</b>
                    										<b className={styles.character}>Lv 1</b>
                    										<b className={styles.character}>Lv 90</b>
                  									</div>
                  									<div className={styles.index2}>
                    										<div className={styles.columns}>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>HP</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>ATK</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>DEF</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>Energy Regen</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>Crit. Rate</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>Crit. DMG</b>
                      											</div>
                    										</div>
                    										<div className={styles.columns}>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>680</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>27</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>72</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>100%</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>5%</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>150%</b>
                      											</div>
                    										</div>
                    										<div className={styles.columns}>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>8500</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>337</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>879</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>-</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>-</b>
                      											</div>
                      											<div className={styles.charaterHp}>
                        												<b className={styles.character}>-</b>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								</div>);
                								};
                								
                								export default Charater;
                								