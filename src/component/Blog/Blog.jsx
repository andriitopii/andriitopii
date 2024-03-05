import { Link } from "react-router-dom";
import "./Blog.scss";
import BlogCard from "../BlogCard/BlogCard";
import { useEffect, useRef, useState } from "react";
import TitleSection from "../TitleSection/TitleSection";

const Blog = () => {
  const dataBlog = [
    {
      data: {day: 2, mounth: 'AUG'},
      title: "HOw create CSS PSEUDo CLASS?",
      desc: "LOremsdfhg jhksgdf hjg sdf hgjsdfhgjskd  kjhsdgf skjdhf  jkhkjhg",
      countComents: 12,
      imgUrl: 'https://the-riotact.com/wp-content/uploads/2010/05/Region-Media-web-designers-1200x800.jpg'
    },
    {
      data: {day: 12, mounth: 'DEC'},
      title: "HOw create CSS PSEUDo CLASS?",
      desc: "LOremsdfhg jhksgdf hjg sdf hgjsdfhgjskd  kjhsdgf skjdhf  jkhkjhg",
      countComents: 123,
      imgUrl: 'https://www.computersciencedegreehub.com/wp-content/uploads/2020/05/Do-I-Need-to-be-Artistic-to-Study-Web-Design-1024x708.jpg'
    },
    {
      data: {day: 11, mounth: 'SEP'},
      title: "HOw create CSS PSEUDo CLASS?",
      desc: "LOremsdfhg jhksgdf hjg sdf hgjsdfhgjskd  kjhsdgf skjdhf  jkhkjhg",
      countComents: 55,
      imgUrl: 'https://static-cse.canva.com/blob/1133681/Untitleddesign.png'
    },
    {
      data: {day: 29, mounth: 'JUN'},
      title: "HOw create CSS PSEUDo CLASS?",
      desc: "LOremsdfhg jhksgdf hjg sdf hgjsdfhgjskd  kjhsdgf skjdhf  jkhkjhg",
      countComents: 22,
      imgUrl: 'https://lh3.googleusercontent.com/proxy/ErLni4k-PwBN7s9yzn0ejvqvh0Y_07JECedZyANwSPwmK1wVTAdVy0L_xO4jCm-fz7HsUWBAHROHWODowkN5wKCazzWsg60nYvqu7__RW46T1TJd-f4jPQ'
    }
  ];
  return (
    <>
      <section id="blog">
        <div className="container container--col container--background-dark">
          <TitleSection>Blog</TitleSection>
          <div className="blog">
            {dataBlog.map((item) => (
              <BlogCard countComents={item.countComents} data={item.data} title={item.title} desc={item.desc}  imgUrl={item.imgUrl}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
