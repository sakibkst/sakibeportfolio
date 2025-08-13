import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="education" className="py-16 px-4 bg-muted/30">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" variants={itemVariants}>
          Education
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <motion.div
            className="flex-1 bg-background rounded-xl shadow-md p-6 flex flex-col gap-2 border-l-4 border-primary"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold">American International University-Bangladesh</h3>
            <p className="text-muted-foreground">June 2021 – 2025</p>
            <p>BSc in Computer Science and Engineering (Major in Software Engineering)</p>
            <p className="font-bold text-primary">CGPA: 3.91 Out of 4.00</p>
          </motion.div>
          <motion.div
            className="flex-1 bg-background rounded-xl shadow-md p-6 flex flex-col gap-2 border-l-4 border-primary/70"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold">Kushtia Govt. College</h3>
            <p className="text-muted-foreground">July 2017 – June 2019</p>
            <p>Higher Secondary Certificate</p>
            <p className="font-bold text-primary">GPA: 5.00 Out of 5.00</p>
          </motion.div>
          <motion.div
            className="flex-1 bg-background rounded-xl shadow-md p-6 flex flex-col gap-2 border-l-4 border-primary/40"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold">Kushtia Zilla School</h3>
            <p className="text-muted-foreground">July 2009 – June 2017</p>
            <p>Secondary School Certificate</p>
            <p className="font-bold text-primary">GPA: 5.00 Out of 5.00</p>
          </motion.div>
        </div>
        {/* Academic Achievements */}
        <motion.div
          className="max-w-5xl mx-auto mt-12"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Academic Achievements</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Recipient of the Dean’s Award for academic excellence four times during undergraduate studies.</li>
            <li>Awarded a 60% merit-based scholarship throughout the B.Sc. program for outstanding academic performance.</li>
            <li>Candidate for the prestigious Magna Cum Laude (Silver Medal) award for academic excellence.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
