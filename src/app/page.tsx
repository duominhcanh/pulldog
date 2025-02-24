import { getBoardData, getFilters } from "@/features/pull-board/actions";
import { PullBoard } from "@/features/pull-board/pull-board";

export default async function Home() {
  const boardData = await getBoardData();
  const filters = await getFilters();

  return <PullBoard repositories={boardData.repositories} filters={filters} />;
}
