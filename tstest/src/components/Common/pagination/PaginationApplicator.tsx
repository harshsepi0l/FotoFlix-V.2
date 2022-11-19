
import { Pagination } from './Pagination';

interface PaginationApplicator {
    data: JSX.Element[];    /**The content which should be paginated
                            (MUST BE IN ARRAY FORM, so make items before passing)*/
    class: string;          //ClassName for innermost container of pagination content
    pageSize: number;       //Number of Items in a page
}

export function PaginationApplicator(props: PaginationApplicator): JSX.Element {

  return (
      <>
          <Pagination
              data={props.data}
              class={props.class}
              pageSize={props.pageSize}
          />
    </>
  );
}
