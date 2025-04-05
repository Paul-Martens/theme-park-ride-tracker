import { Link } from 'react-router';

import { useQuery } from '@tanstack/react-query';

import { Block } from '@/components/ui-kit/layout/Block';
import { Text } from '@/components/ui-kit/layout/Text';

import { fetchVisitDates } from '../api/visit-dates';

function VisitDates() {
  const { isPending, data } = useQuery({
    queryKey: ['visit-dates'],
    queryFn: fetchVisitDates,
  });

  if (isPending) {
    return null;
  }

  if (!data) {
    return (
      <Block>
        <p>No park visits yet!</p>
      </Block>
    );
  }

  return (
    <Block>
      <Text>
        {data.map((date) => (
          <p key={date}>
            <Link to={`/park-visits/${date}`}>{date}</Link>
          </p>
        ))}
      </Text>
    </Block>
  );
}

export { VisitDates };
