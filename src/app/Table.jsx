import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  width: 90%;
  background-color: #0b0b0b;
  border-radius: 8px;
  margin-top: 1rem;
  overflow: hidden;

  table {
    padding: 1rem;
    margin: 0;
    width: 100%;
    border-collapse: collapse;
    background-color: #222;
  }

  h2 {
    text-align: center;
    padding: 1rem;
  }

  th,
  td {
    font-size: 0.9rem;
    text-align: left;
    padding: 0.75rem 0.5rem;
    text-align: center;
  }

  th.playerName,
  td.playerName {
    word-break: break-all;
    width: fit-content;
  }

  tbody tr:nth-child(odd) {
    width: 100%;
    background-color: #111;
    overflow: hidden;
  }

  tbody tr:hover {
    background-color: #1a1a1a;
  }
`;

export default function Table() {
  return (
    <TableContainer>
      <h2>Jogadores Online</h2>
      <table>
        {/* recriar por componentes */}
        <thead>
          <tr>
            <th>ID</th>
            <th className="playerName"> Player Name</th>
            <th>Ping</th>
            <th>Tempo Online</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100</td>
            <td className="playerName">ByteOne_User1ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="playerName">ByteOne_User1</td>
            <td>2h 3min 0s</td>
            <td>6h 30m 10s</td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
}
