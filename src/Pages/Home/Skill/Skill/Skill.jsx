import React from "react";

// import adobeaudition from "../../../../assets/svg/skills/adobeaudition.svg";
import adobeaudition from "../../../../assets/svg/skills/adobeaudition.svg";
import afterEffects from "../../../../assets/svg/skills/after-effects.svg";
import angular from "../../../../assets/svg/skills/angular.svg";
import aws from "../../../../assets/svg/skills/aws.svg";
import azure from "../../../../assets/svg/skills/azure.svg";
import blender from "../../../../assets/svg/skills/blender.svg";
import bootstrap from "../../../../assets/svg/skills/bootstrap.svg";
import bulma from "../../../../assets/svg/skills/bulma.svg";
import c from "../../../../assets/svg/skills/c.svg";
import canva from "../../../../assets/svg/skills/canva.svg";
import capacitorjs from "../../../../assets/svg/skills/capacitorjs.svg";
import coffeescript from "../../../../assets/svg/skills/coffeescript.svg";
import cplusplus from "../../../../assets/svg/skills/cplusplus.svg";
import csharp from "../../../../assets/svg/skills/csharp.svg";
import css from "../../../../assets/svg/skills/css.svg";
import dart from "../../../../assets/svg/skills/dart.svg";
import deno from "../../../../assets/svg/skills/deno.svg";
import django from "../../../../assets/svg/skills/django.svg";
import docker from "../../../../assets/svg/skills/docker.svg";
import fastify from "../../../../assets/svg/skills/fastify.svg";
import figma from "../../../../assets/svg/skills/figma.svg";
import firebase from "../../../../assets/svg/skills/firebase.svg";
import flutter from "../../../../assets/svg/skills/flutter.svg";
import gcp from "../../../../assets/svg/skills/gcp.svg";
import gimp from "../../../../assets/svg/skills/gimp.svg";
import git from "../../../../assets/svg/skills/git.svg";
import go from "../../../../assets/svg/skills/go.svg";
import graphql from "../../../../assets/svg/skills/graphql.svg";
import haxe from "../../../../assets/svg/skills/haxe.svg";
import html from "../../../../assets/svg/skills/html.svg";
import illustrator from "../../../../assets/svg/skills/illustrator.svg";
import ionic from "../../../../assets/svg/skills/ionic.svg";
import java from "../../../../assets/svg/skills/java.svg";
import javascript from "../../../../assets/svg/skills/javascript.svg";
import julia from "../../../../assets/svg/skills/julia.svg";
import kotlin from "../../../../assets/svg/skills/kotlin.svg";
import lightroom from "../../../../assets/svg/skills/lightroom.svg";
import markdown from "../../../../assets/svg/skills/markdown.svg";
import materialui from "../../../../assets/svg/skills/materialui.svg";
import matlab from "../../../../assets/svg/skills/matlab.svg";
import memsql from "../../../../assets/svg/skills/memsql.svg";
import microsoftoffice from "../../../../assets/svg/skills/microsoftoffice.svg";
import mongoDB from "../../../../assets/svg/skills/mongoDB.svg";
import mysql from "../../../../assets/svg/skills/mysql.svg";
import nextJS from "../../../../assets/svg/skills/nextJS.svg";
import nginx from "../../../../assets/svg/skills/nginx.svg";
import numpy from "../../../../assets/svg/skills/numpy.svg";
import nuxtJS from "../../../../assets/svg/skills/nuxtJS.svg";
import opencv from "../../../../assets/svg/skills/opencv.svg";
import photoshop from "../../../../assets/svg/skills/photoshop.svg";
import php from "../../../../assets/svg/skills/php.svg";
import picsart from "../../../../assets/svg/skills/picsart.svg";
import postgresql from "../../../../assets/svg/skills/postgresql.svg";
import premierepro from "../../../../assets/svg/skills/premierepro.svg";
import python from "../../../../assets/svg/skills/python.svg";
import pytorch from "../../../../assets/svg/skills/pytorch.svg";
import react from "../../../../assets/svg/skills/react.svg";
import ruby from "../../../../assets/svg/skills/ruby.svg";
import selenium from "../../../../assets/svg/skills/selenium.svg";
import sketch from "../../../../assets/svg/skills/sketch.svg";
import strapi from "../../../../assets/svg/skills/strapi.svg";
import svelte from "../../../../assets/svg/skills/svelte.svg";
import swift from "../../../../assets/svg/skills/swift.svg";
import tailwind from "../../../../assets/svg/skills/tailwind.svg";
import tensorflow from "../../../../assets/svg/skills/tensorflow.svg";
import typescript from "../../../../assets/svg/skills/typescript.svg";
import unity from "../../../../assets/svg/skills/unity.svg";
import vitejs from "../../../../assets/svg/skills/vitejs.svg";
import vue from "../../../../assets/svg/skills/vue.svg";
import vuetifyjs from "../../../../assets/svg/skills/vuetifyjs.svg";
import webix from "../../../../assets/svg/skills/webix.svg";
import wolframalpha from "../../../../assets/svg/skills/wolframalpha.svg";
import wordpress from "../../../../assets/svg/skills/wordpress.svg";
import Marquee from "react-fast-marquee";
import SkillBox from "../SkillBox/SkillBox";

const Skill = () => {
  const skillsArray = [
    { id: 1, title: "HTML", image: html },
    { id: 2, title: "CSS", image: css },
    { id: 3, title: "Javascript", image: javascript },
    { id: 4, title: "Typescript", image: typescript },
    { id: 5, title: "React", image: react },
    { id: 6, title: "Next JS", image: nextJS },
    { id: 7, title: "Tailwind", image: tailwind },
    { id: 8, title: "MongoDB", image: mongoDB },
    { id: 9, title: "MySQL", image: mysql },
    { id: 10, title: "PostgreSQL", image: postgresql },
    { id: 11, title: "Git", image: git },
    { id: 12, title: "AWS", image: aws },
    { id: 13, title: "Bootstrap", image: bootstrap },
    { id: 14, title: "Docker", image: docker },
    { id: 15, title: "Go", image: go },
    { id: 16, title: "Figma", image: figma },
    { id: 17, title: "Firebase", image: firebase },
    { id: 18, title: "MaterialUI", image: materialui },
    { id: 19, title: "Nginx", image: nginx },
    { id: 20, title: "Strapi", image: strapi },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">Skill</h1>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="flex gap-5">
            {skillsArray.map((skill, idx) => (
              <SkillBox skill={skill} key={idx} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
