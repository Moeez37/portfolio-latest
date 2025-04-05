"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "../../atoms/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const RotatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#4B9FFF"
        wireframe
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
};

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ y }}
      className="min-h-[calc(100vh-6rem)] flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <motion.span
                className="text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                John Doe
              </motion.span>
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Full Stack Developer passionate about creating beautiful and
              functional web applications
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I specialize in building modern web applications using React,
              Node.js, and other cutting-edge technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button
                variant="primary"
                onClickButton={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
              <Button
                variant="secondary"
                onClickButton={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
            </div>
            <motion.div
              className="flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:john@example.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            <motion.div
              className="absolute w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <RotatingSphere />
              </Canvas>
            </motion.div>
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-black/[.05] dark:bg-white/[.06]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
            >
              <Image
                src="/profile-placeholder.svg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
