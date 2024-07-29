import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSummary = () => {
  return (
    <motion.section 
      className="p-10 text-center bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold">Portfolio Summary</h2>
      <p className="mt-4">[Your portfolio summary]</p>
    </motion.section>
  );
};

export default PortfolioSummary;


// import React from 'react';
// import TypingAnimation from './TypingAnimation';

// const PortfolioSummary = () => {
//   return (
//     <div className="p-10 text-center bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText">
//       <TypingAnimation text="Welcome to my portfolio!" />
//       <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet eveniet voluptates, deleniti minima nobis ipsa odio eligendi, veniam soluta consequatur, aliquam corrupti explicabo consequuntur cupiditate architecto sit. Placeat ipsa quas dolorem molestiae, at temporibus dignissimos quaerat voluptatibus praesentium possimus saepe adipisci? Adipisci, nihil quidem maxime magnam aspernatur maiores voluptate! Sed repudiandae quia eum laudantium ad dicta voluptas magni molestias sunt aperiam. Asperiores voluptatum at nisi temporibus in, debitis itaque repellat nemo accusantium hic voluptas molestiae voluptates. Ad officia quasi optio quam et id dolor temporibus expedita quaerat vero. Laboriosam eveniet facere officia modi quam cumque ducimus! Dolorem est accusantium aut provident rem exercitationem doloremque cumque obcaecati, veniam totam perspiciatis itaque ducimus voluptatibus asperiores enim architecto ex? Corporis commodi accusamus mollitia vitae officia libero laborum repellendus tempora et labore sunt porro, voluptatem dolorem ipsum eius recusandae, perspiciatis, asperiores itaque eligendi nam laudantium molestiae id nisi. Sed ullam corrupti provident, aperiam incidunt veniam quae dicta cupiditate aut, esse rerum. Doloremque iure cum voluptatum numquam sapiente expedita quisquam. Magni unde provident libero illo, id ipsa voluptatibus minus dolorem sequi necessitatibus cum perspiciatis aliquid vero odio dolore, quo distinctio ex aliquam quisquam fugit soluta? Obcaecati quos illum corporis ducimus laboriosam molestiae facilis aspernatur.</p>
//     </div>
//   );
// };

// export default PortfolioSummary;