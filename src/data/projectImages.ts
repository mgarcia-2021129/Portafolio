import allEliteHome from '../assets/images/projects/allelitegames/home.webp';
import allElite01 from '../assets/images/projects/allelitegames/01.webp';
import allElite02 from '../assets/images/projects/allelitegames/02.webp';
import kinalCover from '../assets/images/projects/kinal-reports/KinalReports.webp';
import kinal01 from '../assets/images/projects/kinal-reports/KinalReports1.webp';
import kinal02 from '../assets/images/projects/kinal-reports/KinalReports2.webp';
import kinal03 from '../assets/images/projects/kinal-reports/KinalReports3.webp';
import kinal05 from '../assets/images/projects/kinal-reports/KinalReports5.webp';
import kinal07 from '../assets/images/projects/kinal-reports/KinalReports7.webp';
import novaCover from '../assets/images/projects/novabank/Novabank.webp';
import nova01 from '../assets/images/projects/novabank/Novabank1.webp';
import nova07 from '../assets/images/projects/novabank/Novabank7.webp';
import nova09 from '../assets/images/projects/novabank/Novabank9.webp';
import nova13 from '../assets/images/projects/novabank/Novabank13.webp';
import nova14 from '../assets/images/projects/novabank/Novabank14.webp';
import nova15 from '../assets/images/projects/novabank/Novabank15.webp';
import nova18 from '../assets/images/projects/novabank/Novabank18.webp';
import scophCover from '../assets/images/projects/scoph/Scoph.webp';

const projectImages: Record<string, typeof novaCover> = {
  'home.webp': allEliteHome,
  '01.webp': allElite01,
  '02.webp': allElite02,
  'KinalReports.webp': kinalCover,
  'KinalReports1.webp': kinal01,
  'KinalReports2.webp': kinal02,
  'KinalReports3.webp': kinal03,
  'KinalReports5.webp': kinal05,
  'KinalReports7.webp': kinal07,
  'Novabank.webp': novaCover,
  'Novabank1.webp': nova01,
  'Novabank7.webp': nova07,
  'Novabank9.webp': nova09,
  'Novabank13.webp': nova13,
  'Novabank14.webp': nova14,
  'Novabank15.webp': nova15,
  'Novabank18.webp': nova18,
  'Scoph.webp': scophCover,
};

export function getProjectImage(path?: string) {
  const fileName = path?.split(/[\\/]/).at(-1);
  return fileName ? projectImages[fileName] : undefined;
}
