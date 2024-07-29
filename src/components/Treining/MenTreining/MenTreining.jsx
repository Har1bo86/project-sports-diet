import React, { useState } from "react";
import styles from './index.module.scss';
import ModalBlock from "../../UI/ModalBlock/ModalBlock";
function MenTreining() {

    return ( 
        <div className={styles.MenTreining}>
                <div className={styles.MenTreiningFullBody}>
                    <div className={styles.pictureMenFullBody}></div>
                    <div className={styles.bannerMen}>Full Body (Все тело)</div>
                    <div className={styles.BlockInfoMen}>
                        <ModalBlock buttonText={"Ознакомиться"}>
                            <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p> FULL BODY (ВСЕ ТЕЛО)</p>
                                    <li className={styles.li}><span>Программа</span> расчитана на 3 дня в неделю тренировок в зале (например,  пн – ср – пт, либо как удобней). Упражнения в программе подобраны таким образом, что будет легко освоить даже человеку, который в первый раз идёт в зал. Технически сложных движений, например, приседа нет. Использованы преимущественно тренажеры и их аналоги, где сложно откланиться от техники. В тоже время в программу включены самые эффективные упражнения на сегодняшний день.</li>
                                    <li className={styles.li}><span>Время тренировки:</span> около 1,5 часа.</li>
                                    <li className={styles.li}><span>Длительность программы:</span> 3+ месяца. Можно и дольше. Если прогрессия есть – «не чини то, что еще не сломалось».</li>
                                    <li className={styles.li}><span>Структура самой программы – фул бади (все тело).</span> Нет, фул бади подходит не только новичкам. Она идеально подходит тем, кто может заниматься только два – три раза в неделю, чтобы равномерно распределить тренировочный объем.</li>
                                </ul>
                            </div>
                        </ModalBlock>

                    </div>
                    <div className={styles.FirstTreining}>
                        <ModalBlock buttonText={"Первая тренировка"}>
                            <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Первая тренировка</p>
                                    <li className={styles.li}>Приседания со штангой 3х12 (60-65%*)</li>
                                    <li className={styles.li}>Жим штанги лежа 5х6 (75-80%*)</li>
                                    <li className={styles.li}>Разведения гантелей лежа 3х12</li>
                                    <li className={styles.li}>Подъем штанги на бицепс 4х8</li>
                                    <li className={styles.li}>Скручивания на пресс 2х50</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.SecondTreining}>
                    <ModalBlock buttonText={"Вторая тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Вторая тренировка</p>
                                    <li className={styles.li}>Приседания со штангой 4х8 (70-75%*)</li>
                                    <li className={styles.li}>Жим штанги лежа 5х6 (75-80%*)</li>
                                    <li className={styles.li}>Жим штанги стоя 4х8</li>
                                    <li className={styles.li}>Жим к низу в блочном тренажере 3х12</li>
                                    <li className={styles.li}>Подъем EZ-штанги на бицепс в скамье скотта 4х8</li>
                                    <li className={styles.li}>Подъем прямых ног на пресс 4х12</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                       
                    </div>
                    <div className={styles.ThirdTreining}>
                    <ModalBlock buttonText={"Третья тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Третья тренировка</p>
                                    <li className={styles.li}>Становая тяга 5х6 (75-80%*)</li>
                                    <li className={styles.li}>Жим штанги лежа 3х12 (60-65%*)</li>
                                    <li className={styles.li}>Тяга вертикального блока (на широчайшие) 3х12</li>
                                    <li className={styles.li}>Разведения гантелей лежа на скамье 4х8</li>
                                    <li className={styles.li}>Подъем штанги на бицепс стоя 3х12</li>
                                    <li className={styles.li}>Скручивания на пресс 2х50</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    
                    <a href={`${process.env.PUBLIC_URL}/treining.txt`} download> <button className={styles.Download}>Скачать план тренировок</button></a>
                </div>

                <div className={styles.MenTreiningMuscleGroups}>
                <div className={styles.pictureMenMuscleGroups}></div>
                    <div className={styles.bannerMen}>Сплит (отдельные группы мышц)</div>
                    <div className={styles.BlockInfoMen}>
                    <ModalBlock buttonText={"Ознакомиться"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p> Сплит (отдельные группы мышц)</p>
                                    <li className={styles.li}><span>Сплит-тренировка</span>— это тренировочный комплекс, разбитый на несколько частей. За одно занятие получается проработать 2-3 различные группы мышц. Также эта программа предусматривает время для полноценного отдыха — ведь она дает сильную нагрузку, и организму необходимо восстановиться.</li>
                                    <li className={styles.li}><span>Время тренировки:</span> около 60-90 минут.</li>
                                    <li className={styles.li}><span>Длительность программы:</span> 2+ месяца. Можно и дольше. Если прогрессия есть – «не чини то, что еще не сломалось».</li>
                                    <li className={styles.li}><span>Сплит-тренировки</span> не столь эффективны для новичков, однако ими успешно могут пользоваться опытные атлеты, и профессионалы.</li>
                                </ul>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.FirstTreining}>
                    <ModalBlock buttonText={"Первая тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Первая тренировка</p>
                                    <h6>(грудь + трицепс + передняя и средняя дельты)</h6>
                                    <li className={styles.li}>Жим штанги на наклонной скамье 4х10 (80%*)</li>
                                    <li className={styles.li}>Жим гантелей на горизонтальной скамье	3х10-12</li>
                                    <li className={styles.li}>Отжимания на брусьях	3х10-12</li>
                                    <li className={styles.li}>Жим штанги лежа узким хватом	3х10</li>
                                    <li className={styles.li}>Французский жим со штангой 3х12</li>
                                    <li className={styles.li}>Жим гантелей сидя	4х12</li>
                                    <li className={styles.li}>Тяга штанги к подбородку широким хватом 3х12</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.SecondTreining}>
                    <ModalBlock buttonText={"Вторая тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Вторая тренировка</p>
                                    <h6>(спина + бицепс + задняя дельта)</h6>
                                    <li className={styles.li}>Становая тяга	4х12,10,8,6</li>
                                    <li className={styles.li}>Подтягивания широким хватом 4х10-12</li>
                                    <li className={styles.li}>Тяга штанги в наклоне	3х10 (90%*)</li>
                                    <li className={styles.li}>Тяга вертикального блока узким обратным хватом 3х10-12</li>
                                    <li className={styles.li}>Горизонтальная тяга	3х10-12</li>
                                    <li className={styles.li}>Подъемы гантелей на бицепс сидя на наклонной скамье 4х10</li>
                                    <li className={styles.li}>Махи гантелями в наклоне	4х15</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.ThirdTreining}>
                    <ModalBlock buttonText={"Третья тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Третья тренировка</p>
                                    <h6>(ноги + пресс)</h6>
                                    <li className={styles.li}>Приседания со штангой	4х12,10,8,6</li>
                                    <li className={styles.li}>Фронтальные приседания 4х10-12</li>
                                    <li className={styles.li}>Выпады со штангой	4х15-20</li>
                                    <li className={styles.li}>Сгибания ног лежа в тренажере	3х12-15 (85%*)</li>
                                    <li className={styles.li}>Подъем на носки стоя в тренажере</li>
                                    <li className={styles.li}>Обратные скручивания на скамье 3х10-15</li>
                                    <li className={styles.li}>Скручивания в тренажере 3х12-15</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>

                    <a href={`${process.env.PUBLIC_URL}/treining.txt`} download> <button className={styles.Download}>Скачать план тренировок</button></a>
                </div>
                </div>
            
    );
  }
  
  export default MenTreining;
