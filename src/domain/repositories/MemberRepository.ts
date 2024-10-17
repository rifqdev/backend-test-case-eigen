import { Member } from "../entities/Member";

export interface MemberRepository {
  findById(id: string): Promise<Member | null>;
  update(member: Member): Promise<void>;
  getAll(): Promise<Member[]>;
}
