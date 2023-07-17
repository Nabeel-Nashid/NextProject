import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import bg from "../../../../public/pexels.jpeg";

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam maiores totam neque odio sint laboriosam dolore excepturi, sapiente accusantium autem velit vel impedit facere unde officiis facilis repellat provident?</p>
          <div className={styles.author}>
            <Image
              src={bg}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>User Name</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={bg} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic beatae eos consequatur quidem itaque aperiam iste vitae id, animi ipsam neque. Nisi harum aspernatur totam ea itaque dignissimos, delectus ad.consectetur adipisicing elit. Hic beatae eos consequatur quidem itaque aperiam iste vitae id, animi ipsam neque. Nisi harum aspernatur totam ea itaque</p>
      </div>
    </div>
  );
}

export default BlogPost;
