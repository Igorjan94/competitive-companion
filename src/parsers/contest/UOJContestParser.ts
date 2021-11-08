import { Parser } from '../Parser';
import { UOJProblemParser } from '../problem/UOJProblemParser';
import { SimpleContestParser } from '../SimpleContestParser';

export class UOJContestParser extends SimpleContestParser {
  public problemParser: Parser = new UOJProblemParser();
  public linkSelector: string = '.top-buffer-md > .table-responsive > .table a';

  public getMatchPatterns(): string[] {
    return ['https://uoj.ac/contest/*'];
  }
}
