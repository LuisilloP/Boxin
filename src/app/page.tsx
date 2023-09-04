"use client"
import Image from "next/image"
import respaldo from "../assets/BoxMan.jpeg"
import boxRing from "../assets/boxRing.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import "leaflet/dist/leaflet.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import { Pagination } from 'swiper/modules';
//Hits
import UpperImage from "../assets/upper.jpg"
import JabImage from "../assets/jab.jpg"
import CrossImage from "../assets/crossTwo.jpeg"
import GanchoImage from "../assets/gancho.jpg"

import { dataPunch } from "@/components/dataNav"
import Map from "@/components/Map";
import GetImages from "@/functions/GetImages";


export default function Home() {

  const paginationF = (array: string[][]) => {
    const arrayNAmes = array.map(value => { return value[0] })
    const pagination = {
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return `<span class="${className}" >${arrayNAmes[index]}</span>`;
      },
    };
    return pagination
  }

  return (

    <>
      <div id="Principal" className=" clip-path-header bg-[#090909] h-[45rem] sm:h-[30rem] md:h-[30rem]  xl:h-[40rem] px-5  ">

        <div className="flex flex-col md:flex-row pt-20 justify-center">
          <h1 className=" md:w-[30rem] text-center md:text-start lg:w-[45rem] text-[70px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px] pt-10 px-5 md:px-15 text-white font-title font-weight-bold uppercase">Pelea como un <span className=" text-red-600">Campeon</span></h1>
          <Image className=" w-[25rem] m-auto md:m-1 md:w-[30rem] xl:w-[40rem] 2xl:w-[45rem] rounded-lg border border-transparent shadow-sm " src={respaldo} alt="imagen de boxeador"></Image>
        </div>
      </div>
      <section id="Historia" className="py-10 font-title px-5 flex flex-col md:flex-row gap-5 m-auto justify-center  ">
        <Image className=" sm:w-[25rem] md:h-[20rem]" src={boxRing} alt="section image"></Image>
        <div className="border-2 border-red-600 md:h-20"></div>
        <div className="md:w-[35rem] lg:w-[30rem]">
          <h2 className=" text-4xl font-bold text-black uppercase  ">how we got started
            in this business</h2>
          <p className="font-bold text-zinc-600 pt-5">Lorem ipsum dolor sit amet. Sed sunt voluptatem non veniam sint ut dolor sint aut eveniet beatae id vitae nemo et modi cupiditate qui corporis voluptate. Ut amet neque ad ipsum consequatur est recusandae itaque et rerum minima aut officiis esse quo aperiam eligendi.
            Ut obcaecati accusamus quo autem molestiae est atque dignissimos qui rerum voluptates eum molestiae nulla rem placeat impedit et magnam magnam.</p>
        </div>
      </section>
      <section id="Golpes" className=" pt-10  bg-black text-white font-title font-bold px-5 pb-10 ">
        <h1 className="text-6xl text-center pb-10">Aprende Golpes Basicos</h1>
        <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
          <div className="flex flex-col md:flex-row gap-5 ">
            <Image className=" h- md:w-[50%] h-[20rem] " src={UpperImage} alt="box-image"></Image>
            <div className="md:w-[50%]">
              <p className="text-[40px]">UpperCut</p>
              <div className="flex flex-col  md:flex-row gap-5">
                <div className="md:border-2 border-blue-600 md:h-10"></div>
                <p className=" text-gray-300">El uppercut es un golpe poderoso y técnico que se dirige hacia arriba desde una posición baja, con el objetivo de impactar en la zona del mentón o el cuerpo del oponente. Se utiliza para abrir la guardia del oponente y, en ocasiones, puede llevarlo a un estado de desequilibrio o incluso derribarlo  </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 ">
            <Image className=" h- md:w-[50%] h-[20rem] " src={JabImage} alt="box-image"></Image>
            <div className="md:w-[50%]">
              <p className="text-[40px]">Jab</p>
              <div className="flex flex-col  md:flex-row gap-5">
                <div className=" md:border-2 border-blue-600 md:h-10"></div>
                <p className=" text-gray-300" >El jab es uno de los golpes fundamentales en el boxeo, y es una herramienta esencial para establecer el ritmo, mantener la distancia y encontrar oportunidades para ataques más poderosos</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 ">
            <Image className=" h- md:w-[50%] h-[20rem] " src={CrossImage} alt="box-image"></Image>
            <div className="md:w-[50%]">
              <p className="text-[40px]">Cross</p>
              <div className="flex flex-col  md:flex-row gap-5">
                <div className="md:border-2 border-blue-600 md:h-10"></div>
                <p className=" text-gray-300" >El golpe recto en boxeo, también conocido como cross, es un golpe potente y directo que se lanza con el puño dominante hacia el frente. Es una técnica fundamental en el boxeo y es efectiva para alcanzar al oponente desde una distancia media o larga.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 ">
            <Image className=" h- md:w-[50%] h-[20rem] " src={GanchoImage} alt="box-image"></Image>
            <div className="md:w-[50%]">
              <p className="text-[40px]">Hook</p>
              <div className="flex flex-col  md:flex-row gap-5">
                <div className=" md:border-2 border-blue-600 md:h-10"></div>
                <p className=" text-gray-300" >El gancho es un golpe circular en boxeo que se dirige hacia el costado del oponente. Es uno de los golpes más poderosos y efectivos en el deporte y se puede realizar tanto con la mano derecha (gancho de derecha) como con la izquierda (gancho de izquierda).</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="PunchI" className="pt-10 font-title font-bold px-5 pb-10 ">
        <h1 className="text-6xl text-center pb-10">Instrucciones de golpe</h1>
        <Swiper
          pagination={paginationF(dataPunch)}
          modules={[Pagination]}
          className="mySwiper"
        >
          {dataPunch.map((data) =>
          (
            <SwiperSlide key={data[0]}>
              <div >

                <Image className=" rounded-sm" width={500} height={500} alt="punch" src={data[2]}></Image>
                <h1 className=" text-5xl">{data[0]}</h1>
                {data[1].split(" * ").map((number, i) =>
                (
                  <ul className=" text-zinc-600" key={i}>
                    <br></br>
                    <li>{number}</li>
                  </ul>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
      <section id="Horarios" className=" px-5 py-5  min-h-[15rem] bg-black  text-white ">
        <h1 className="text-6xl text-center pb-5 font-bold">Horarios y Dias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <Map></Map>
          <div className="justify-center align-middle text-center pt-10 md:pt-0">
            <h1 className="text-5xl font-bold uppercase  text-red-600 ">Horario</h1>
            <p className="text-2xl">Desde 18:00pm - Hasta 20:00pm</p>
            <h1 className="text-5xl font-bold uppercase pt-5 text-blue-600 ">Dias</h1>
            <p className="text-2xl">Lunes Martes Miercoles Viernes</p>
          </div>
        </div>
      </section>
      <section id="Galeria" className="pt-10 font-title font-bold px-5 pb-10 ">
        <h1 className="text-6xl text-center pb-10 font-bold">Galeria de Imagenes</h1>
        <GetImages></GetImages>
      </section>

    </>
  )
}

//
