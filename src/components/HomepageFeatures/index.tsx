import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '免费',
    Svg: require('@site/static/img/free.svg').default,
    description: (
      <>
        我们承诺永远不会对知识分享内容进行任何形式的收费，知识从群众中来、也应当无障碍地到群众中去。
      </>
    ),
  },
  {
    title: '持续',
    Svg: require('@site/static/img/continuous.svg').default,
    description: (
      <>
        我们相信，通过开源协作的方式能够激发参与者的最大活力，所有人齐心协力，一起不断努力、使得共同创作的作品日臻完善。
      </>
    ),
  },
  {
    title: '开源',
    Svg: require('@site/static/img/cc.svg').default,
    description: (
      <>
        本站点所有内容（除非另外声明）均遵循 CC BY-SA 4.0 协议，您可以在遵守协议的前提下随心改造与分发本站点内容。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
