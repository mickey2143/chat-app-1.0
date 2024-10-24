import { verifyToken } from "../../../utils/tokens";

export async function GET(req, res) {
  const { id } = res.params;
  const token = verifyToken(id);
  return Response.json({ valid: token });
}
