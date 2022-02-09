import React from "react";
import Header from "../component/Header";
import ourSchoolBg from "../assets/ourSchoolBg.png";
import ourStoryBg from "../assets/ourStoryBg.png";
import ourStoryPic from "../assets/ourStoryPic.png";
import ourVisionPic from "../assets/ourVisionPic.png";
import parentHandbookPic from "../assets/parentHandbookPic.png";
import academicBg from "../assets/academicBg.png";
import academicPic from "../assets/academicPic.png";

export default function OurSchool() {
  return (
    <>
      <div className="our__school__container">
        <img
          src={ourSchoolBg}
          alt="ourSchoolBg"
          className="home__main__container__img"
        />
        <div className="home__main__container__overlay">
          <div className="our__school__container__overlay__content">
            <div className="our__school__overlay__content__heading">
              OUR SCHOOL
            </div>
          </div>
        </div>
      </div>
      <div className="our__story__main__container">
        <img
          src={ourStoryBg}
          alt="ourStoryBg"
          className="our__story__main__container__img"
        />
        <div className="our__story__main__container__overlay">
          <div className="our__story__main__container__content">
            <div className="our__story__main__container__content__left">
              <div className="our__story__main__container__content__left__heading">
                Our Story
              </div>
              <div className="our__story__main__container__content__left__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt repellendus aliquam provident expedita minima
                necessitatibus ut quam quaerat distinctio numquam, officia
                labore, neque pariatur quibusdam suscipit, quas maxime eius
                maiores sapiente enim unde praesentium? A cupiditate maiores,
                doloremque labore quibusdam, quia facere unde adipisci sed
                dolorum itaque aliquid praesentium eos aut corrupti temporibus
                quam nam, pariatur perspiciatis animi aliquam dolores soluta?
                Dolorum distinctio similique explicabo, eaque eligendi deserunt
                aperiam velit. dolorum itaque aliquid praesentium eos aut
                corrupti temporibus quam nam, pariatur perspiciatis animi
                aliquam dolores soluta? Dolorum distinctio similique explicabo,
                eaque eligendi deserunt aperiam velit.
              </div>
            </div>
            <img
              src={ourStoryPic}
              alt="outStoryPic"
              className="our__story__main__container__content__img"
            />
          </div>
          <div className="our__story__main__container__content__reverse">
            <img
              src={ourVisionPic}
              alt="ourVisionPic"
              className="our__story__main__container__content__img"
            />
            <div className="our__story__main__container__content__left__reverse">
              <div className="our__story__main__container__content__left__heading">
                Our Vision
              </div>
              <div className="our__story__main__container__content__left__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt repellendus aliquam provident expedita minima
                necessitatibus ut quam quaerat distinctio numquam, officia
                labore, neque pariatur quibusdam suscipit, quas maxime eius
                maiores sapiente enim unde praesentium? A cupiditate maiores,
                doloremque labore quibusdam, quia facere unde adipisci sed
                dolorum itaque aliquid praesentium eos aut corrupti temporibus
                quam nam, pariatur perspiciatis animi aliquam dolores soluta?
                Dolorum distinctio similique explicabo, eaque eligendi deserunt
                aperiam velit. dolorum itaque aliquid praesentium eos aut
                corrupti temporibus quam nam, pariatur perspiciatis animi
                aliquam dolores soluta? Dolorum distinctio similique explicabo,
                eaque eligendi deserunt aperiam velit.
              </div>
            </div>
          </div>
          <div className="parents__handbook__main__container">
            <div className="parents__handbook__main__container__left">
              <div className="parents__handbook__main__container__left__heading">
                Parents Handbook
              </div>
              <div className="parents__handbook__main__container__left__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores dicta odit hic reprehenderit est accusamus, ducimus
                sapiente necessitatibus, exercitationem nobis nemo enim mollitia
                et illo omnis ad aperiam. Laborum suscipit nihil corrupti maxime
                eaque soluta reprehenderit, quae fugit tempora temporibus
                quaerat quibusdam libero doloremque. Quis iusto vel cum itaque
                officia maiores perspiciatis distinctio veritatis delectus
                natus? Mollitia temporibus exercitationem sed. Nam praesentium
                eligendi vitae possimus obcaecati nemo consectetur nobis et illo
                omnis ad aperiam. Laborum suscipit nihil corrupti maxime eaque
                soluta reprehenderit, quae fugit tempora temporibus quaerat
                quibusdam libero doloremque. Quis iusto vel cum itaque officia
                maiores perspiciatis distinctio veritatis delectus natus?
                Mollitia temporibus exercitationem sed. Nam praesentium eligendi
                vitae possimus obcaecati nemo consectetur nobis tenetur!
              </div>
            </div>
            <img
              src={parentHandbookPic}
              alt="parentHandbookPic"
              className="parents__handbook__main__container__img"
            />
          </div>
          <div className="assignment__main__container">
            <div className="assignment__main__container__heading">
              Assessment Policy for Hybrid Classes
            </div>
            <div className="assignment__main__container__paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui hic
              dignissimos ullam delectus fugit dolor repellat illum
              necessitatibus corrupti a nobis quos libero magni, cum aut, omnis
              aperiam praesentium aliquam expedita doloribus animi unde
              accusamus sunt? Sit beatae quos nisi quam deserunt ullam
              accusamus, qui non? Beatae aperiam voluptas ullam! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Qui hic dignissimos
              ullam delectus fugit dolor repellat illum necessitatibus corrupti
              a nobis quos libero magni, cum aut, omnis aperiam praesentium
              aliquam expedita doloribus animi unde accusamus sunt? Sit beatae
              quos nisi quam deserunt ullam accusamus, qui non? Beatae aperiam
              voluptas ullam!
            </div>
          </div>
        </div>
      </div>
      <div className="academic__main__container">
        <div className="academic__main__container__content">
          <img
            src={academicBg}
            alt="academicBg"
            className="academic__main__container__img"
          />
          <div className="academic__main__container__content__overlay">
            <div className="academic__main__container__content__overlay__content">
              <div className="academic__main__container__content__overlay__heading">
                academic calender
              </div>
              <div className="academic__main__container__content__overlay__paragraph">
                FEBRUARY
              </div>
              <img
                src={academicPic}
                alt="academicPic"
                className="academic__main__container__content__overlay__pic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="further__details__our__school__main__section">
        <div className="further__details__our__school__main__section__wrapper">
          <div className="further__details__our__school__main__section__wrapper__heading">
            Student Council
          </div>
          <div className="further__details__our__school__main__section__wrapper__paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            repudiandae accusantium exercitationem, cum, et quidem sequi ipsam
            laudantium quas provident, omnis asperiores fugiat ut nulla porro?
            Sunt ad, et numquam illum, similique eligendi doloremque odio maxime
            ullam accusantium doloribus fugit! repudiandae accusantium
            exercitationem, cum, et quidem sequi ipsam laudantium quas
            provident, omnis asperiores fugiat ut nulla porro? Sunt ad, et
            numquam illum, similique eligendi doloremque odio maxime ullam
            accusantium doloribus fugit!
          </div>
        </div>
        <div className="further__details__our__school__main__section__wrapper further__details__our__school__main__section__wrapper__policy">
          <div className="further__details__our__school__main__section__wrapper__heading">
            Behavior Policy
          </div>
          <div className="further__details__our__school__main__section__wrapper__paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            repudiandae accusantium exercitationem, cum, et quidem sequi ipsam
            laudantium quas provident, omnis asperiores fugiat ut nulla porro?
            Sunt ad, et numquam illum, similique eligendi doloremque odio maxime
            ullam accusantium doloribus fugit! repudiandae accusantium
            exercitationem, cum, et quidem sequi ipsam laudantium quas
            provident, omnis asperiores fugiat ut nulla porro? Sunt ad, et
            numquam illum, similique eligendi doloremque odio maxime ullam
            accusantium doloribus fugit! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptate repudiandae accusantium exercitationem,
            cum, et quidem sequi ipsam laudantium quas provident, omnis
            asperiores fugiat ut nulla porro? Sunt ad, et numquam illum,
            similique eligendi doloremque odio maxime ullam accusantium
            doloribus fugit! repudiandae accusantium exercitationem, cum, et
            quidem sequi ipsam laudantium quas provident, omnis asperiores
            fugiat ut nulla porro? Sunt ad, et numquam illum, similique eligendi
            doloremque odio maxime ullam accusantium doloribus fugit!
          </div>
        </div>
        <div className="further__details__our__school__main__section__wrapper further__details__our__school__main__section__wrapper__policy__academic">
          <div className="further__details__our__school__main__section__wrapper__heading further__details__our__school__main__section__wrapper__policy__academic">
            Academic Policy
          </div>
          <div className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            repudiandae accusantium exercitationem, cum, et quidem sequi ipsam
            laudantium quas provident, omnis asperiores fugiat ut nulla porro?
            Sunt ad, et numquam illum, similique eligendi doloremque odio maxime
            ullam accusantium doloribus fugit! repudiandae accusantium
            exercitationem, cum, et quidem sequi ipsam laudantium quas
            provident, omnis asperiores fugiat ut nulla porro? Sunt ad, et
            numquam illum, similique eligendi doloremque odio maxime ullam
            accusantium doloribus fugit! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptate repudiandae accusantium exercitationem,
            cum, et quidem sequi ipsam laudantium quas provident, omnis
            asperiores fugiat ut nulla porro? Sunt ad, et numquam illum,
            similique eligendi doloremque odio maxime ullam accusantium
            doloribus fugit! repudiandae accusantium exercitationem, cum, et
            quidem sequi ipsam laudantium quas provident, omnis asperiores
            fugiat ut nulla porro? Sunt ad, et numquam illum, similique eligendi
            doloremque odio maxime ullam accusantium doloribus fugit!
          </div>
        </div>
      </div>
    </>
  );
}
