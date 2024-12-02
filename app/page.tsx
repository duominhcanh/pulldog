import { getPullBoardData } from "@/features/pull-board/actions";
import { PullBoard } from "@/features/pull-board/pull-board";

export default async function Home() {
  const { repos } = await getPullBoardData();

  return <PullBoard repos={repos} />;
}
