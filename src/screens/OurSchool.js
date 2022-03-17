import React from "react";
import Header from "../component/Header";
import ourSchoolBg from "../assets/ourSchoolBg.png";
import pricipal_pic from "../assets/pricipal_pic.png";
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
                OUR school
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our__school__main__content__wrapper">
        <div className="our__story__main__container__content">
          <div className="our__story__main__container__content__left">
            <div className="our__story__main__container__content__left__heading">
              Our Story
            </div>
            <div className="our__story__main__container__content__left__paragraph">
              Lahore Grammar School was established in 1979. The nationalization
              of educational institutions in Pakistan had led to an alarming
              decline in the standards of instruction and facilities being
              provided in most schools and colleges. Interventions in the realm
              of education were consequently critical to arrest this abysmal
              state of affairs. In 1978, the Pakistani Government announced that
              it would welcome initiatives in the educational sector. Taking
              advantage of this, a group of women from varied professional
              backgrounds, including education, and with the shared objective of
              contributing in this field, decided to set up a girls school.
            </div>
            <div className="our__story__main__container__content__left__paragraph">
              In 1979, therefore, Lahore Grammar School was established when 55
              Main opened its doors to a handful of students. We’ve come a long
              way since then!
            </div>
            <div className="our__story__main__container__content__left__paragraph">
              The school is affiliated with the Cambridge Board of International
              Examinations for the O and A Level programs. The grading system
              applied in the senior levels is in line with the specifications of
              the Board.
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
              Our vision is a holistic and dynamic one that appreciates
              diversity and stresses the importance of opinions based on
              rational and informed premises rather that on superstition,
              emotion and insufficient understanding of issues. Emphasis is laid
              on creating a culture of thinking in the classroom and education
              is seen as a broad and complex process of acquiring both knowledge
              and understanding. We aspire to make our students aware of
              contemporary issues, both national and worldwide, and their
              personal role not only in developing an understanding of these
              issues but prompting a desire to translate that knowledge into
              active commitment and take steps, where possible, to bring about
              positive change in their environment.
            </div>
            <div className="our__story__main__container__content__left__paragraph">
              We have taken several initiatives in the field of education in
              Pakistan, including the promotion of the performing arts which we
              felt were being neglected at great cost to our cultural tradition
              and a healthier social milieu. LGS also lays great emphasis on the
              teaching of regional languages so that our students develop an
              appreciation of their cultural roots and in the rich traditions of
              literature and music of their province.
            </div>
            <div className="our__story__main__container__content__left__paragraph">
              We take great pride in the fact that community service is a
              critical element of our programme, where our students are
              encouraged to share their skills and learn from the courage and
              resilience of those less fortunate than themselves.
            </div>
          </div>
        </div>
        <div className="from__the__pricipal__container">
          <img
            src={pricipal_pic}
            alt="pricipal_pic"
            className="from__the__pricipal__container__img"
          />
          <div className="from__the__pricipal__container__heading">
            NOTE FROM THE PRINCIPAL
          </div>
          <div className="from__the__pricipal__container__sub__heading">
            Imran Shahid
          </div>
          <div className="from__the__pricipal__container__para">
            Creativity, Passion and Imagination is the essence of our values at
            55 Main and is reflected in all areas of your experience with
            us.Come and challenge the world you live in as you break down
            barriers that have been taken for granted. To this end, optimism is
            the key quality we seek in young women as we select students for our
            school. When you combine your inherent optimism with passion and
            commitment, you will conquer!You have unparalleled opportunities in
            the world today. Exploit them and move ahead. We will always have
            your back and support you in your endeavors as you experience life
            with us and find yourself. When you succeed, we rejoice; if you
            fall, we will always be there to support you.Our programmes support
            our values and our philosophy and is not merely a conduit for
            passing a battery of exams. It is a journey in self-discovery, which
            to us is the vital part of our work. When you challenge pre-existing
            norms and cultures, and you challenge yourself, we
            succeed!Respecting diversity in the student body is essential for
            life at 55 Main and is at the core of our principles. Our community
            thrives on encouragement and inspiration as we build each other up
            and each student is accepted for who she is.You will leave us having
            discovered your own true potential and become the best version of
            yourself. As this happens, 55 Main will have won.
          </div>
        </div>
        <div className="parents__handbook__main__container">
          <div className="parents__handbook__main__container__left">
            <div className="parents__handbook__main__container__left__heading">
              Parents Handbook
            </div>
            <div className="parents__handbook__main__container__left__paragraph">
              This Parents’ Handbook aims to provide you with the necessary
              information regarding school rules and policies. However, if you
              would like further clarification or have some queries of your own,
              please feel free to call our school office for additional
              information. Our website, www.lgs.edu.pk is also a good source of
              information about our various policies (Behaviour Policy, Academic
              Policy, Anti- Harassment Policy) as well as other information
              about school life in general.
            </div>
            <button
              style={{ width: 180, marginTop: "1em" }}
              className="btn__white"
            >
              Download
            </button>
          </div>
          <img
            src={parentHandbookPic}
            alt="parentHandbookPic"
            className="parents__handbook__main__container__img"
          />
        </div>
        <div className="assignment__main__container__new">
          <div className="assignment__main__container__heading">
            Assessment Policy for Hybrid Classes
          </div>
          <div className="assignment__main__container__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and
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
              <button
                style={{ width: 180, marginTop: ".6em", marginBottom: "2em" }}
                className="btn__white"
              >
                Download
              </button>

              <img
                src={academicPic}
                alt="academicPic"
                className="academic__main__container__content__overlay__pic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="behaviour__policy__container">
        <div className="behaviour__policy__container__heading">
          Behavior Policy
        </div>
        <div className="behaviour__policy__container__para">
          Lahore Grammar School aspires to create an environment where quality
          teaching and learning can take place. This environment, managed with
          fairness and firmness, promotes the growth and development of the
          whole person, allowing each student in our care to develop personally,
          educationally, and socially. The aim of the Behaviour Policy is to
          safeguard both the students and the school environment. We want our
          students to respect the ethos of the school. There are six core values
          that the school has adopted: Respect, Tolerance, Honesty, Compassion,
          Responsibility, and Courage. It is our hope that these will serve as
          guiding principles for our students. We believe that good behaviour
          flourishes in an atmosphere of high expectations, support, guidance
          and encouragement. We feel we would have succeeded in our mission if,
          when our students graduate, they are intellectually curious, involved
          with their community, and demonstrate strength and resilience.
        </div>
        <div className="aims__behaviour__policy__container">
          <div className="behaviour__policy__container__heading__dark">
            Aims of the Behaviour Policy
          </div>
          <div className="behaviour__policy__container__para__dark">
            To promote good behaviour; • To define and make clear school
            expectations • To ensure that every student is able to benefit from
            all that the school has to offer • To provide a framework within
            which students may develop their own skills and interests whilst
            becoming responsible, courteous and tolerant members of their school
            community and society • To apprise students, faculty and parents of
            the school’s response to any lapses in behaviour expectations and •
            To enable the Principal, Coordinators, and members of Administration
            and Faculty to carry out their responsibilities in maintaining order
            and discipline in the school.
          </div>
        </div>

        <div className="behaviour__policy__container__heading">
          Code of Conduct
        </div>
        <div className="behaviour__policy__container__para">
          We expect students to treat staff and each other with consideration
          and good manners. • All behaviour should aim to support our core
          school values. • Students are encouraged to respond positively to the
          opportunities and challenges of school life. • Students are expected
          to be familiar with and follow the rules set out in the Uniform,
          Grooming, and Attendance Policy, the IT, Devices, and Social Media
          Policy, and the Anti-Bullying Policy. • Students need to develop an
          awareness of right and wrong and an ability to differentiate between
          acceptable and unacceptable behaviour. • Students should understand
          what is expected of them and why sanctions may be imposed for
          behaviour contrary to expectations. • We expect students to be keen to
          learn and to participate in school activities and to ensure that they
          are not a barrier to others’ learning and participation in school
          life. • All members of the school community: students, faculty and
          support staff, are expected to respect the buildings, furniture,
          equipment, and environment of the school. • We expect students to
          behave at all times in a manner that reflects the best interest of the
          whole community.
        </div>
      </div>
    </>
  );
}
