import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import bg from '../../../public/pexels.jpeg'

function Blog() {
  return (
    <div className={styles.mainContainer}>
      
        <Link href={`#`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={bg}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
    </div>
  )
}

export default Blog
