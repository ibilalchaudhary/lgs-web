import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import campusPic from "../assets/campusPic.png";
import internetExplorePicNew from "../assets/internetExplorePicNew.png";
import publicSpeakNew from "../assets/publicSpeakNew.png";
import scienceTechPic from "../assets/scienceTechPic.png";
import dramaPic from "../assets/dramaPic.png";
import sportsPic from "../assets/sportsPic.png";
import { Link } from "react-router-dom";

function MediaPublicationCard() {
  return (
    <Link
      to="/media-publications-details"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="campus__life__main__container__content__card"
    >
      <img
        src={campusPic}
        alt="campusPic"
        className="campus__life__main__container__content__card__img"
      />
      <div className="campus__life__main__container__content__card__overlay">
        <div className="campus__life__main__container__content__card__overlay__heading">
          New Heading Here
        </div>
      </div>
    </Link>
  );
}

function NavEntry({ title, selected, setSelected, href }) {
  return (
    <a
      onClick={() => {
        setSelected(title);
      }}
      href={href}
      className="campus__life__container__new__header__entry"
    >
      {title}
      {selected === title ? (
        <div className="campus__life__container__new__header__entry__underlined"></div>
      ) : null}
    </a>
  );
}

export default function CampusLife() {
  const [selected, setSelected] = useState("International Exposure");
  return (
    <>
      <div className="our__school__container">
        <img
          src={ourCampusBg}
          alt="ourCampusBg"
          className="home__main__container__img"
        />
        <div className="home__main__container__overlay">
          <div className="our__school__container__overlay__content">
            <div className="our__school__overlay__content__heading__wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="598"
                height="42"
                viewBox="0 0 598 42"
              >
                <rect
                  id="Rectangle_190"
                  data-name="Rectangle 190"
                  width="598"
                  height="42"
                  rx="21"
                  fill="#ec5700"
                />
              </svg>
              <div className="our__school__overlay__content__heading">
                Campus life
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="campus__life__container__new">
        <div className="campus__life__container__new__header">
          <NavEntry
            selected={selected}
            setSelected={setSelected}
            title="International Exposure"
            href="#international"
          />
          <NavEntry
            selected={selected}
            setSelected={setSelected}
            title="Public Speaking"
            href="#public"
          />
          <NavEntry
            selected={selected}
            setSelected={setSelected}
            title="COMMUNITY SERVICE 
            AND THE ENVIRONMENT"
            href="#community"
          />
          <NavEntry
            selected={selected}
            setSelected={setSelected}
            title="Science and 
            Technology"
            href="#science"
          />
          <NavEntry
            selected={selected}
            setSelected={setSelected}
            title="Drama, Music, 
            And Languages"
            href="#drama"
          />
          <NavEntry
            selected={selected}
            setSelected={setSelected}
            title="Sports"
            href="#sports"
          />
          <NavEntry
            selected={selected}
            setSelected={setSelected}
            title="Social Media
            and Publications"
            href="#media"
          />
        </div>
        <div
          id="international"
          className="international__explore__contain__new"
        >
          <div className="international__explore__contain__new__left">
            <div className="international__explore__contain__new__left__heading">
              International
              <span>Exposure</span>
            </div>
            <div className="international__explore__contain__new__left__para">
              At LGS FSD, we believe in learning through a rich diversity of
              experiences beyond the classroom. With ever increasing
              technological advances and economic and social interdependence,
              the world has transformed into a global village. Providing
              exposure plays an integral part in fulfilling our aim of
              developing and nurturing global citizens. Whether a Model UN
              conference, NASA’s Space Competition, camp at the Seeds of Peace
              headquarters, a cultural exchange, or simply a recreational trip,
              we facilitate and provide endless adventures and opportunities for
              our students to travel and gain international exposure. Hover over
              the red dots to learn more about our experiences!
            </div>
          </div>
          <img
            src={internetExplorePicNew}
            alt="internetExplorePicNew"
            className="international__explore__contain__new__img"
          />
        </div>
        <div id="public" className="public__speak__new">
          <img
            src={publicSpeakNew}
            alt="publicSpeakNew"
            className="public__speak__new__img"
          />
          <div className="public__speak__new__content">
            <div className="public__speak__new__content__container">
              <div className="international__explore__contain__new__left__heading">
                Public
                <span>Speaking</span>
              </div>
              <div className="international__explore__contain__new__left__para">
                In the Model United Nations Society at LGS FSD, we aim to
                educate our students about current events, conflicts in
                international relations, and the structure and agenda of the
                United Nations. Students are provided an opportunity to step
                into the shoes of various ambassadors and empathise with their
                given country’s stance. Popular topics include peace and
                security, human rights, the environment, economic development
                and globalization. We take immense pride in our MUNers who have
                won Best Delegate and Outstanding Speaker Awards at both
                national and international conferences in India and Germany. To
                get in touch with the MUN Representatives at{" "}
                <b>mun@lgsfsd.edu.pk</b>
              </div>
              <div className="public__speak__new__content__btn__container">
                <button className="public__speak__new__content__btn">
                  Business and Economic Society
                </button>
                <button className="public__speak__new__content__btn">
                  Urdu Debate Society
                </button>
                <button className="public__speak__new__content__btn">
                  MUN Society
                </button>
                <button className="public__speak__new__content__btn">
                  English Debate Society
                </button>
                <button className="public__speak__new__content__btn">
                  Law Society
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="community" className="community__and__enviroment__container">
          <div className="international__explore__contain__new__left__heading">
            COMMUNITY SERVICE
            <span>AND THE ENVIRONMENT</span>
          </div>
          <div className="international__explore__contain__new__left__para">
            The Community Service and Environment Society aims to mobilize the
            student body of LGS FSD so they can become responsible and
            empathetic individuals. We collaborate with multiple NGOs throughout
            the year to engage our students with the community outside school.
            Some notable collaborations include visits to Heavens Old Home and
            the Todd’s Welfare animal shelter. We also invite organizations such
            as Project Pehchaan and Gender Guardian to hold seminars discussing
            the marginalization of the transgender community. Our students also
            plan engaging arts and crafts activities for each fruit drive. Since
            we believe charity begins at home, we also enthusiastically run the
            50 Rupee Campaign to generate funds each month for our janitorial
            and custodial staff to support and assist them with tuition fees,
            books and uniforms for their children.
          </div>
        </div>
        <div id="science" className="science__technology__new">
          <div className="science__technology__new__content">
            <div className="public__speak__new__content__container">
              <div className="international__explore__contain__new__left__heading">
                Science and
                <span>Technology</span>
              </div>
              <div className="international__explore__contain__new__left__para">
                The Science Society here at LGS FSD encourages enthusiasm for
                Science through enquiry and experimentation. We enable students
                of all abilities to enjoy and understand different scientific
                concepts and take part in a diverse range of competitions and
                projects. From holding yearly science fairs to sending students
                to India for space camps such as Astrotrek, we try to develop
                passion for science amongst students at a very early age. We
                facilitate participation in well renowned International
                competitions such as the Google Science Fair, Intel and various
                Interschool competitions such as PSIFI. One of the most integral
                features of the extracurricular program at LGS FSD is the Asian
                Regional Space Settlement Design Competition held by NASA which
                we have won a record of four times! Here’s what some of our
                students have to say about their NASA experience: “Nobody could
                have prepared us for all the amazing things we were going to
                experience. The competition itself was what we expected – tough,
                gruesome, fast paced but at the same time, enjoyable. Apart from
                that, the people we met, the places we saw, the laughter we
                shared all made a lasting impression on us. We came back from
                that border as a stronger team and as better people. All of us
                would admit, in a heartbeat, that we would want to experience it
                all over again.” – Hooran Mumtaz
              </div>
              <div className="public__speak__new__content__btn__container">
                <button className="public__speak__new__content__btn">
                  SciMath Society
                </button>
                <button className="public__speak__new__content__btn">
                  ICT Society
                </button>
              </div>
            </div>
          </div>

          <img
            src={scienceTechPic}
            alt="scienceTechPic"
            className="public__speak__new__img"
          />
        </div>
        <div id="drama" className="drama__music__container">
          <img
            src={dramaPic}
            alt="dramaPic"
            className="drama__music__container__img"
          />
          <div className="drama__music__container__content">
            <div className="international__explore__contain__new__left__heading">
              Drama, Music,
              <span>And Languages</span>
            </div>
            <div className="international__explore__contain__new__left__para">
              LGS FSD Dramatics society, Lahore Grammar Stage, has a philosophy
              that is centered on the use of symbolism and abstract to
              deconstruct the fundamental principles of human existence, and to
              display them using drama as a medium. Theatre is a powerful tool
              of expression, one where boundaries have no place, and any idea
              can be utilized to portray an emotion and send a message to the
              masses. Lahore Grammar Stage takes pride in striving to be
              different and promoting areas of the performing arts that are
              neglected in this part of the world. Through performing arts, we
              challenge our society’s deepest assumptions and stereotypes while
              spreading awareness and preserving the art and cultural identity
              of Pakistan. We plan to involve the amateur artist in our dramatic
              society to build upon their artistic creation and expression, to
              spark new ideas through theatrical activities and workshops. Our
              expertise lies in experimental theatre, abstract mimes, dark
              comedies, street theatre, and shadow theatre. Lahore Grammar Stage
              reflects this ideology by performing numerous plays which include
              “Sultana ka Khawaab”, a feminist play set in a Matriarchal
              society, “Sun Dou Hazaar Ikaasi”, a play about an equal community
              set in a dystopian world, and “Death”, a dark comedy depicting the
              mind of a serial killer.
            </div>

            <div className="public__speak__new__content__btn__container">
              <button className="public__speak__new__content__btn">
                Urdu Literary Society
              </button>
              <button className="public__speak__new__content__btn">
                English Literary Society
              </button>
              <button className="public__speak__new__content__btn">
                Studio 55
              </button>
              <button className="public__speak__new__content__btn">
                Performing Arts Society
              </button>
            </div>
          </div>
        </div>
        <div id="sports" className="sports__container">
          <div className="drama__music__container__content">
            <div className="international__explore__contain__new__left__heading">
              Sports
            </div>
            <div className="international__explore__contain__new__left__para">
              One of the most renowned societies of LGS FSD, the Sports Society,
              is a space for aspiring sportswomen to polish their skills. Not
              only does it allow girls to better themselves at sports, ranging
              from netball to table tennis, but it also provides a network of
              people passionate about the same goal to connect. The society has
              hosted several successful sports festivals, the most recent one
              being the All Girls Sportsfest in 2019, and has participated in
              numerous local and national competitions.
            </div>

            <div className="public__speak__new__content__btn__container">
              <button className="public__speak__new__content__btn">
                Cricket
              </button>
              <button className="public__speak__new__content__btn">
                Football
              </button>
              <button className="public__speak__new__content__btn">
                Hockey
              </button>

              <button className="public__speak__new__content__btn">
                Badminton
              </button>
              <button className="public__speak__new__content__btn">
                Table Tennis
              </button>
            </div>
          </div>
          <img
            src={sportsPic}
            alt="sportsPic"
            className="sports__container__img"
          />
        </div>
      </div>
      <div id="media" className="media__heading">
        Media and Publications
      </div>
      <div className="careers__content__section__campus__life">
        <div className="careers__content__section__campus__life__content">
          <MediaPublicationCard />
          <MediaPublicationCard />
          <MediaPublicationCard />
          <MediaPublicationCard />
        </div>
      </div>
    </>
  );
}
