import { ReactNode } from "react";

import { Column, Flex, Heading, Tag, Text } from "@/once-ui/components";
import styles from "@/components/Timeline.module.scss";

export interface TimelineItem {
  title: string;
  subtitle?: string;
  period?: string;
  description?: ReactNode;
  bullets?: ReactNode[];
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <Column as="ol" className={styles.timeline} fillWidth gap="24" padding="0" margin="0">
      {items.map((item) => (
        <li key={`${item.title}-${item.subtitle ?? ""}`} className={styles.item}>
          <div className={styles.marker} aria-hidden="true">
            <span className={styles.dot} />
          </div>
          <Column gap="12" paddingBottom="24">
            <Flex fillWidth horizontal="space-between" vertical="start" gap="12" wrap>
              <Column gap="4">
                <Heading as="h3" variant="heading-strong-l">
                  {item.title}
                </Heading>
                {item.subtitle && (
                  <Text variant="body-default-m" onBackground="brand-weak">
                    {item.subtitle}
                  </Text>
                )}
              </Column>
              {item.period && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.period}
                </Text>
              )}
            </Flex>

            {item.description && (
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.description}
              </Text>
            )}

            {item.bullets && item.bullets.length > 0 && (
              <Column as="ul" gap="8" paddingLeft="20">
                {item.bullets.map((bullet, index) => (
                  <Text as="li" key={`${item.title}-bullet-${index}`} variant="body-default-m">
                    {bullet}
                  </Text>
                ))}
              </Column>
            )}

            {item.tags && item.tags.length > 0 && (
              <Flex gap="8" wrap>
                {item.tags.map((tag) => (
                  <Tag key={tag} size="s">
                    {tag}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        </li>
      ))}
    </Column>
  );
}
