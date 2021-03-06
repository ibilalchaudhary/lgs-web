import React from "react";
import ourSchoolBg from "../assets/ourSchoolBg.jpg";
import pricipal_pic from "../assets/pricipal_pic.png";
import director_pic from "../assets/director.jpg";
import ourStoryPic from "../assets/ourStoryPic.png";
import ourVisionPic from "../assets/ourVisionPic.png";
import academicBg from "../assets/academicBg.png";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import AliaRehman from "../assets/AliaRehman.jpeg";
import MeenaGul from "../assets/MeenaGul.jpeg";
import irfanaAziz from "../assets/irfanaAziz.jpg";
import AIRMS from "../assets/AIRMS.png";
import PARENTHANDBOOK from "../assets/PARENTHANDBOOK.png";
import academicPic from "../assets/academicPic.png";
import ParentsHandbook from "../assets/ParentsHandbook.pdf";
import TermCalendar from "../assets/2ndTermCalendar.pdf";
import AcademicCard from "../component/AcademicCard";

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
              Lahore Grammar School, Faisalabad first opened its doors in 1999
              with quality education as its prime objective. Since then, the
              school has been trailblazing the existing academic landscape of
              the city through excellence in education. Today, we are a vastly
              enriched school with numerous facilities and a thriving campus
              life.
              <br />
              <br />
              We combine critical and logical thinking skills and a diverse
              co-curricular program to inculcate a genuine love for learning in
              our students. With our proud legacy of nurturing multitudinous
              youngsters into well-rounded, enlightened individuals, we believe
              only sky is our limit.
              <br />
              <br />
              The school is affiliated with the Cambridge Board of International
              Examinations for the O and A Level programs and Board of
              Intermediate and Secondary Education for Matriculation to provide
              our students with excellent progression routes to higher
              education. We are committed to facilitate our students with
              challenging academic programs for cohesive transition between
              grade levels from primary to middle and ultimately their high
              school.
              <br />
              <br />
              Our students are our pride and we proactively support them to
              nurture their innate talents through various clubs and societies.
              Over years, our graduating students have been placed in the best
              foreign and national universities and that is a reflection of the
              success of our academic life.
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
        <div className="from__the__pricipal__container__wrapper">
          <div className="from__the__pricipal__container">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2UwZTBlMDt9LmJ7ZmlsbDojYzRjNGM0O30uY3tmaWxsOm5vbmU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5hdmF0YXItMjwvdGl0bGU+PHBhdGggY2xhc3M9ImEiIGQ9Ik02MCwzMEEzMCwzMCwwLDEsMSwzMCwwLDMwLDMwLDAsMCwxLDYwLDMwIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik00MC4zNSwyNy4wOWE5LjgyLDkuODIsMCwxLDEtOS44MS05LjgzLDkuODIsOS44MiwwLDAsMSw5LjgxLDkuODMiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTI5LjE3LDQwLjg1YTkuMjMsOS4yMywwLDAsMCwyLjcxLDAsMTEuOSwxMS45LDAsMCwxLTEuMzQuMDdBMTIuMzIsMTIuMzIsMCwwLDEsMjkuMTcsNDAuODVaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0zOS4yNSwzNy44M2ExMy43NywxMy43NywwLDAsMS03LjM3LDMsOS4yMyw5LjIzLDAsMCwxLTIuNzEsMCwxMy42NiwxMy42NiwwLDAsMS03LjM1LTNBMjEsMjEsMCwwLDAsMTAuMDYsNTIuMzdhMjkuOSwyOS45LDAsMCwwLDQwLjc2LS44QTIxLDIxLDAsMCwwLDM5LjI1LDM3LjgzWiIvPjwvc3ZnPg=="
              alt="pricipal_pic"
              className="from__the__pricipal__container__img"
            />

            <div className="from__the__pricipal__container__heading">
              Mrs. Saltanat Bokhari - Director
            </div>
            <div className="from__the__pricipal__container__para">
              I am delighted to offer you a warm welcome to LGS FSD. At LGS.
              FSD, we view diversity as our biggest strength. We aim to inspire
              in our students the curiosity to learn, the self-confidence to
              lead and the compassion to serve. Our primary source of insight
              and energy is our students??? validation, critique and innovative
              ideas. We mutually guide and encourage one another to understand
              the importance of not just academic achievement but also values of
              tolerance and respect. I hope our website gives you a sense of our
              purpose and vision. -
            </div>
          </div>
          <div className="from__the__pricipal__container">
            <img
              src={MeenaGul}
              alt="pricipal_pic"
              className="from__the__pricipal__container__img"
            />

            <div className="from__the__pricipal__container__heading">
              Ms. Meena Gul - Regional Director
            </div>
            <div className="from__the__pricipal__container__para">
              What sets Lahore Grammar School Faisalabad apart is that its
              students exude a strong commitment in developing a personal
              responsibility in all pursuits and endeavours, striving to achieve
              academic success, sporting prowess, artistic and creative
              excellence and develop social as well as moral mind set. Here, the
              student???s potential is nurtured in a stimulating educational
              environment, inspiring them to achieve their goals. Our students
              are encouraged to be resilient in their learning and we at Lahore
              Grammar School, ensure that they are valued and cared for.
            </div>
          </div>
          <div className="from__the__pricipal__container">
            <img
              src={AliaRehman}
              alt="pricipal_pic"
              className="from__the__pricipal__container__img"
            />

            <div className="from__the__pricipal__container__heading">
              Mrs. Alia Noman - Regional Coordinator
            </div>
            <div className="from__the__pricipal__container__para">
              What sets Lahore Grammar School Faisalabad apart is that its
              students exude a strong commitment in developing a personal
              responsibility in all pursuits and endeavours, striving to achieve
              academic success, sporting prowess, artistic and creative
              excellence and develop social as well as moral mind set. Here, the
              student???s potential is nurtured in a stimulating educational
              environment, inspiring them to achieve their goals. Our students
              are encouraged to be resilient in their learning and we at Lahore
              Grammar School, ensure that they are valued and cared for.
            </div>
          </div>
          <div className="from__the__pricipal__container">
            <img
              src={pricipal_pic}
              alt="pricipal_pic"
              className="from__the__pricipal__container__img"
            />

            <div className="from__the__pricipal__container__heading">
              Mr. Imran Shahid - Principal
            </div>
            <div className="from__the__pricipal__container__para">
              It gives me immense pleasure and a feeling of sheer pride and
              accomplishment to address you as Principal of the prestigious
              Lahore Grammar school, Faisalabad, an institution that has striven
              to maintain high academic standards ever since its inception. Our
              commitment is to provide our students with an array of
              opportunities, both curricular and co-curricular, to help them
              attain their highest potentials.
              <br />
              <br /> Our aim is not just giving our students an education that
              entitles them to a job but to nurture in them lifelong love for
              learning and inculcate in them values that will help them become
              kind, caring and responsible individuals.
              <br />
              <br />I feel privileged to be working with highly qualified and
              dedicated faculty always striving to provide students with the
              latest skills and knowledge to help them stand out in this ever
              evolving and fiercely competitive world. Our school life is
              vibrant with a variety of activities, happy noises of learning and
              positive energy.
              <br />I welcome you to LGS, Faisalabad and assure you that it will
              be our endeavor to make our students??? school life an enriching and
              memorable experience!
            </div>
          </div>
          <div className="from__the__pricipal__container">
            <img
              src={irfanaAziz}
              alt="pricipal_pic"
              className="from__the__pricipal__container__img"
            />

            <div className="from__the__pricipal__container__heading">
              Mrs. Irfana Aziz - VICE PRINCIPAL
            </div>
            <div className="from__the__pricipal__container__para">
              Welcome to the official website of Lahore Grammar School,
              Faisalabad; a prestigious institution that has been providing high
              quality learning opportunities and experiences to young minds of
              the city for more than two decades. We at LGS, Faisalabad strive
              to make education an enjoyable and enlightening process. Our
              school life is an excellent amalgamation of analytical,
              intellectual, and healthy physical growth of our students along
              with inculcating human values in them. We are also proud to have a
              faculty comprising of highly qualified individuals always doing
              their best to develop and nurture the young minds of today into
              well-rounded global citizens of tomorrow!
            </div>
          </div>
        </div>
        <div className="parents__handbook__main__container">
          <div className="parents__handbook__main__container__left">
            <div className="parents__handbook__main__container__left__heading">
              Parents Handbook
            </div>
            <div className="parents__handbook__main__container__left__paragraph">
              This Parents??? Handbook aims to provide you with the necessary
              information regarding school rules and policies. However, if you
              would like further clarification or have some queries of your own,
              please feel free to call our school office for additional
              information. Our website, www.lgs.edu.pk is also a good source of
              information about our various policies (Behaviour Policy, Academic
              Policy, Anti- Harassment Policy) as well as other information
              about school life in general.
            </div>
            <a
              href={ParentsHandbook}
              style={{
                width: 180,
                marginTop: "1em",
                textAlign: "center",
                textDecoration: "none",
              }}
              className="btn__white"
              target="_blank"
            >
              Download
            </a>
          </div>
          <img
            src={PARENTHANDBOOK}
            alt="parentHandbookPic"
            className="parents__handbook__main__container__img"
          />
        </div>
        <div className="assignment__main__container__new">
          <div className="assignment__main__container__heading">
            Assessment Policy for Hybrid Classes
          </div>
          <div className="assignment__main__container__paragraph">
            In view of the ongoing challenges presented by the Covid-19
            pandemic, we are continuing with our revised assessment policy from
            2022.
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
              <a
                href={TermCalendar}
                target="_blank"
                style={{
                  width: 180,
                  marginTop: ".6em",
                  marginBottom: "2em",
                  textDecoration: "none",
                }}
                className="btn__white"
              >
                Download
              </a>
              <img
                src={academicPic}
                alt="academicPic"
                className="academic__main__container__content__overlay__pic"
              />
              <div className="academic__main__container__content__entry__wrapper">
                <AcademicCard
                  month="Dec-Jan"
                  date="25-06"
                  voca="Winter Break"
                />
                <AcademicCard
                  month="March-April"
                  date="25-04"
                  voca="Spring break"
                />
                <AcademicCard month="May" date="27" voca="Summer break" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginBottom: "4em" }}
        className="behaviour__policy__container"
      >
        <div className="behaviour__policy__container__heading">
          Behavior Policy
        </div>
        <div className="behaviour__policy__container__para">
          Lahore Grammar School aspires to create an environment where quality
          teaching and learning can take place. This environment, managed with
          fairness and firmness, promotes the growth and development of the
          whole person, allowing each student in our care to develop personally,
          educationally, and socially.
          <br />
          <br />
          The aim of the Behaviour Policy is to safeguard both the students and
          the school environment. We want our students to respect the ethos of
          the school. There are six core values that the school has adopted:
          Respect, Tolerance, Honesty, Compassion, Responsibility, and Courage.
          It is our hope that these will serve as guiding principles for our
          students. We believe that good behaviour flourishes in an atmosphere
          of high expectations, support, guidance and encouragement.
          <br />
          <br />
          We feel we would have succeeded in our mission if, when our students
          graduate, they are intellectually curious, involved with their
          community, and demonstrate strength and resilience.
        </div>
        <div className="aims__behaviour__policy__container">
          <div className="aims__behaviour__policy__container__left">
            <div className="behaviour__policy__container__heading__dark">
              Aims of the Behaviour Policy
            </div>
            <div className="behaviour__policy__container__para__dark">
              <ul>
                <li>To promote good behaviour;</li>
                <li> To define and make clear school expectations;</li>
                <li>
                  To ensure that every student is able to benefit from all that
                  the school has to offer;
                </li>
                <li>
                  To provide a framework within which students may develop their
                  own skills and interests whilst becoming responsible,
                  courteous and tolerant members of their school community and
                  society;
                </li>
                <li>
                  To apprise students, faculty and parents of the school???s
                  response to any lapses in behaviour expectations;
                </li>
                <li>
                  To enable the Principal, Coordinators, and members of
                  Administration and Faculty to carry out their responsibilities
                  in maintaining order and discipline in the school.
                </li>
              </ul>
            </div>
          </div>
          <img
            src={AIRMS}
            alt="AIRMS"
            className="aims__behaviour__policy__container__right"
          />
        </div>

        <div className="behaviour__policy__container__heading">
          Code of Conduct
        </div>
        <div className="behaviour__policy__container__para">
          <ul>
            <li>
              We expect students to treat staff and each other with
              consideration and good manners.
            </li>
            <li>All behaviour should aim to support our core school values.</li>
            <li>
              Students are encouraged to respond positively to the opportunities
              and challenges of school life.
            </li>
            <li>
              Students are expected to be familiar with and follow the rules set
              out in the Uniform, Grooming, and Attendance Policy, the IT,
              Devices, and Social Media Policy, and the Anti-Bullying Policy.
            </li>
            <li>
              Students need to develop an awareness of right and wrong and an
              ability to differentiate between acceptable and unacceptable
              behaviour.
            </li>
            <li>
              Students should understand what is expected of them and why
              sanctions may be imposed for behaviour contrary to expectations.
            </li>
            <li>
              We expect students to be keen to learn and to participate in
              school activities and to ensure that they are not a barrier to
              others??? learning and participation in school life.
            </li>
            <li>
              All members of the school community: students, faculty and support
              staff, are expected to respect the buildings, furniture,
              equipment, and environment of the school.
            </li>
            <li>
              We expect students to behave at all times in a manner that
              reflects the best interest of the whole community.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
