import mult from './mult'

export default function pow(a, b) {
	var res = a;
	while (--b) {
		res = mult(res, a);
	}
	return res;
}
