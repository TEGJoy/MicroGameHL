import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import amoImage from '../images/Screenshot_14.jpg'
import petah from '../images/Peter_Griffin.png'
import homah from '../images/homah.png'
import holyf from '../images/holyf.mp3'
import scream from '../images/scream.mp3'
import sonofa from '../images/sonofa.mp3'
import gnome from '../images/Gnome sound effect.mp3'
import dud from '../images/The_dud.png'
import smasnug from '../images/smasnug.png'
import crab from '../images/Crab.jpg'
import baman from '../images/Baman.png'
import bean from '../images/bean.png'
import bns from '../images/bns.jpg'
import berry from '../images/oranberryblissey.jpg'
import yamcha from '../images/yamcha.png'
const Resources = {
    amo: new ImageSource(amoImage),
    petah: new ImageSource(petah),
    dud: new ImageSource(dud),
    holyf: new Sound(holyf),
    gnome: new Sound(gnome),
    homah: new ImageSource(homah),
    scream: new Sound(scream),
    sonofa: new Sound(sonofa),
    smasnug: new ImageSource(smasnug),
    crab: new ImageSource(crab),
    baman: new ImageSource(baman),
    bns: new ImageSource(bns),
    berry: new ImageSource(berry),
    bean: new ImageSource(bean),
    yamcha: new ImageSource(yamcha),
    
}
const ResourceLoader = new Loader([Resources.amo, Resources.petah, Resources.dud, Resources.holyf, Resources.scream, Resources.baman, Resources.gnome, Resources.sonofa, Resources.homah, Resources.crab, Resources.smasnug, Resources.bns, Resources.berry,Resources.bean, Resources.yamcha])

export { Resources, ResourceLoader }